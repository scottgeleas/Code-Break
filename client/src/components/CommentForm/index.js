import { useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { CREATE_COMMENT } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

function CommentForm() {
    const [commentState, setCommentState] = useState({
        text: '',
    });

    const {loading, data} = useQuery(GET_ME);
    const userData = data?.getMe || {};

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

        try {
            await createComment({
                variables: {
                    commentAuthor: userData.username,
                    commentText: commentState.text
                },
            });

            setCommentState({
                text: '',
            });

            document.getElementById('commentFormModalCloseBtn').click();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="commentContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentFormModal">Add Comment</button>

                    <div className="modal fade" id="commentFormModal" tabIndex="-1" aria-labelledby="commentFormModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="commentFormModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="commentText" className="form-label">Your Comment</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="commentText"
                                                name="text"
                                                placeholder="Type your comment here."
                                                required="required"
                                                value={commentState.text}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" id="commentFormModalCloseBtn" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CommentForm;