import React from 'react';
// import snippet query from utils/queries.js

export default function Snippet(props) {
    // useQuery to get all snippets (const {loading, data} = useQuery(GET_ALL_SNIPPET);)

    // console.log(props.selectedLanguage);

    //let snippetArray = []

    // if (!loading){
        //let snippetArray = data

        // if (props.selectedLanguage) {
        //     console.log('Use selected language and filter snippets array that store in data variable');
        //     snippetArray = data.filter()
        // }
    // }

    // return (
    //     {snippetArray.map(item => {
    //         return (
    //             <div class="card" id="snippetCard">
    //                 <div class="card-header">
    //                     {item.title}
    //                 </div>
    //                 <div class="card-body">
    //                     <p class="card-text">
    //                             {item.description}
    //                     </p>
    //                 </div>
    //                 <div class="card-footer">
        
    //                 </div>
    //             </div>
    //         );
    //     })}
    // );
    return (
        <div class="card" id="snippetCard">
            <div class="card-header">
                Snippet Title
                {props.selectedLanguage}
            </div>
            <div class="card-body">
                <p class="card-text">

                </p>
            </div>
            <div class="card-footer">

            </div>
        </div>
    );
}
