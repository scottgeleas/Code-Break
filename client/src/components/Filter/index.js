import React from 'react';
import './css/index.css';

export default function Filter() {
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
    const language = languages.map((l, index) => (
        <button type='button' class='list-group-item list-group-item-action'>
            {l.name}
        </button>
    ));

    return (
        <>
            <div class='list-group'>
                <button
                    type='button'
                    class='list-group-item list-group-item-action active'>
                    Filter By Language
                </button>
                {language}
            </div>
        </>
    );
}
