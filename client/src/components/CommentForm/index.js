import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

function CommentForm(props) {
    const [commentState, setCommentState] = useState({
        text: '',
    });

    const { snippetId } = props;
    const isLoggedIn = Auth.isLoggedIn();

    const [createComment] = useMutation(CREATE_COMMENT);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCommentState({
            ...commentState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const token = isLoggedIn ? Auth.getStorageToken() : null;

        if (!token) {
            document.location.assign('/login');

            return false;
        }

        try {
            await createComment({
                variables: {
                    commentText: commentState.text,
                    snippetId: snippetId,
                },
            });

            setCommentState({
                text: '',
            });

            document.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="commentFormContainer mb-4">
            {isLoggedIn ? (
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="commentText" className="form-label">Add Your Comment</label>
                        <textarea
                            className="form-control"
                            id="commentText"
                            name="text"
                            placeholder="Type your comment here."
                            rows="4"
                            required="required"
                            value={commentState.text}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Comment</button>
                </form>
            ) : (
                <p>To be able leave a comment, user must be <a href="/login">logged in</a>.</p>
            )}
        </div>
    );
}

export default CommentForm;