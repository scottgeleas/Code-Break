import React, { useState } from 'react';
import './css/index.css';

function Filter() {
    const [language, setLanguage] = useState('');

    const filterResults = (event) => {
        const selected = event.currentTarget.dataset.language;
        console.log(selected);
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
            <ul className='list-group filterList'>
                <h3 className=' list-group-item'>Filter</h3>
                {languagesList}
            </ul>
        </>
    );
}

export default Filter;
