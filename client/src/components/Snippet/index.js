// import React, { useState } from 'react';
// import snippet query from utils/queries.js
import { useQuery } from '@apollo/client';
import { GET_ALL_SNIPPETS } from '../../utils/queries';

export default function Snippet(props) {
    const {loading, data} = useQuery(GET_ALL_SNIPPETS);

    console.log(props.selectedLanguage);

    const snippetArray = []

    if (!loading){
        const snippetArray = data

        if (props.selectedLanguage) {
            // console.log('Use selected language and filter snippets array that store in data variable');
            snippetArray = data.filter()
        };
    };
};