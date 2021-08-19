import React, { useState } from 'react';
import './css/index.css';

import SnippetsList from '../SnippetsList';

function Filter() {
    const [language, setLanguage] = useState('');

    const filterResults = (event) => {
        const selected = event.currentTarget.dataset.language;

        setLanguage(selected);
    };

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

    const languagesList = languages.map((l, index) => (
        <button
            type='button'
            className='list-group-item list-group-item-action'
            key={index}
            onClick={filterResults}
            data-language={l.name}
        >
            {l.name}
        </button>
    ));

    return (
        <>
            <div className='row'>
                <div className='col-12 col-lg-3'>
                    <ul className='list-group filterList mb-3'>
                        <h3 className=' list-group-item'>Language</h3>
                        {languagesList}
                    </ul>
                </div>

                <div className='col-12 col-lg-9'>
                    <SnippetsList languageFilter={language} />
                </div>
            </div>
        </>
    );
}

export default Filter;
