import React, { useState } from 'react';
import './css/index.css';

import { useQuery } from '@apollo/client';
import { QUERY_FILTER_SNIPPETS } from '../../utils/queries';

function Filter() {
    // const [filterState, setLanguage] = useState("");
    const [language, setLanguage] = useState("");


    const { loading, data } = useQuery(QUERY_FILTER_SNIPPETS, {
        // pass URL parameter
        variables: { filterSnippets: language },
    });
    
    // const  snippetData = data?. || {};
    
    const filterResults = (event) => {
        // get only results of selected language
        const selected = event.currentTarget.dataset.language;
        console.log(selected)

        setLanguage(selected);

        console.log("language: " + language )

        console.log(data)
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
