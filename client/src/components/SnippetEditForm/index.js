import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { EDIT_SNIPPET } from '../../utils/mutations';

import Auth from '../../utils/auth';

function SnippetEditFrom(props) {
    const { snippetData } = props;

    const [editedSnippetState, setEditedSnippetState] = useState({
        id: snippetData ? snippetData._id : '',
        title: snippetData ? snippetData.title : '',
        description: snippetData ? snippetData.description : '',
        language: snippetData ? snippetData.language : '',
        code: snippetData ? snippetData.code : '',
        isPublic: snippetData ? snippetData.isPublic : false,
    });

    const [editSnippet] = useMutation(EDIT_SNIPPET);

    if (!snippetData) {
        return (
            <></>
        );
    }

    const languages = [
        {
            name: 'JavaScript',
        },
        {
            name: 'HTML',
        },
        {
            name: 'CSS',
        },
        {
            name: 'React',
        },
    ];

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setEditedSnippetState({
            ...editedSnippetState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const token = Auth.isLoggedIn() ? Auth.getStorageToken() : null;

        if (!token) {
            document.location.assign('/login');

            return false;
        }

        try {
            const { data } = await editSnippet({
                variables: {
                    ...editedSnippetState,
                },
            });

            document.querySelector('.js-close-edit-snippet-modal').click();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editSnippetModal">Edit Snippet</button>

            <div className="modal fade" id="editSnippetModal" tabIndex="-1" aria-labelledby="editSnippetModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editSnippetModalLabel">Edit Snippet</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleFormSubmit} id="edit-form">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="snippetTitle" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="snippetTitle"
                                        name="title"
                                        required="required"
                                        value={editedSnippetState.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="snippetDescription" className="form-label">Description</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="snippetDescription"
                                        name="description"
                                        value={editedSnippetState.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="snippetLanguage" className="form-label">Language</label>
                                    <select
                                        className="form-select"
                                        id="snippetLanguage"
                                        name="language"
                                        aria-label="Snippet language"
                                        required="required"
                                        value={editedSnippetState.language}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select snippet language</option>
                                        {languages.map((item, index) => {
                                            return (
                                                <option value={item.name} key={index}>{item.name}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="snippetCode" className="form-label">Code</label>
                                    <textarea
                                        type="text"
                                        className="form-control snippet-code-textarea"
                                        id="snippetCode"
                                        name="code"
                                        required="required"
                                        value={editedSnippetState.code}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="form-check form-switch mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="snippetIsPublic"
                                        name="isPublic"
                                        checked={editedSnippetState.isPublic}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="snippetIsPublic">Make snippet public</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary js-close-edit-snippet-modal" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Edit Snippet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SnippetEditFrom;
