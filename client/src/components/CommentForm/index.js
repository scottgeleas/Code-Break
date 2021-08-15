import './css/index.css';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../utils/mutations';


function Comment() {
    const [commentState, setCommentState] = useState({
        author: '',
        text: '',
    });

    const [createComment] = useMutation(CREATE_COMMENT);

    const handleChange = (event) => {
        const { author, value } = event.target;

        setCommentState({
            ...commentState,
            [author]: value,
            
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createComment({
                variables: {
                    ...commentState,
                },
            });

            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="commentContainer">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="commentAuthor" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="commentAuthor"
                        name="Author"
                        placeholder="Tom Smith"
                        required="required"
                        value={commentState.text}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="commentText" className="form-label">Your Comment</label>
                    <input
                        type="text"
                        className="form-control"
                        id="commentText"
                        name="comment"
                        placeholder="This is your comment text."
                        required="required"
                        value={commentState.text}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <a className="btn btn-primary" href="/comment">Submit Comment</a>
            </form>
        </div>
    );
}

export default Comment;