import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_SNIPPET } from '../../utils/mutations';

import Auth from '../../utils/auth';

function RemoveSnippet(props) {
    const [removeSnippet] = useMutation(REMOVE_SNIPPET);

    async function deleteSnippet() {
        const token = Auth.isLoggedIn() ? Auth.getStorageToken() : null;

        if (!token) {
            document.location.assign('/login');

            return;
        }

        try {
            const { data } = await removeSnippet({
                variables: {
                    _id: props.snippetId,
                },
            });

            document.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-sm snippet-action-btn"
                onClick={deleteSnippet}
            >
                Remove
            </button>
        </>
    );
}

export default RemoveSnippet;
