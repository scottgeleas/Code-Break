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
                    author: userData.username,
                    text: commentState.text
                },
            });
            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="commentContainer">
            {loading ? (
                <p>Loading...</p>
            ): (
                <form onSubmit={handleFormSubmit}>

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

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}
           
        </div>
    );
}

export default CommentForm;