import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_SNIPPET } from '../../utils/mutations';

function RemoveSnippet(props) {
    const [removeSnippet] = useMutation(REMOVE_SNIPPET);

    async function deleteSnippet() {
        const { data } = await removeSnippet({
            variables: {
                _id: props._id,
            },
        });
    }

    return (
        <>
            <button
                type='button'
                className='btn btn-primary'
                onClick={deleteSnippet}
            >
                Remove Snippet
            </button>
        </>
    );
}

export default RemoveSnippet;
