import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './css/index.css';


import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SNIPPET } from '../../utils/queries';

import Auth from '../../utils/auth';
import CommentForm from '../CommentForm/index';
import CommentsList from '../CommentsList/index';


function SnippetDetail() {
    const { snippetId } = useParams();

    const { loading, data } = useQuery(GET_SNIPPET, {
        variables: {
            id: snippetId,
        },
    });

    const isLoggedIn = Auth.isLoggedIn();
    let hljsData = '';

    if (!loading) {
        if (data) {
            hljsData = hljs.highlight(data.getSnippet.code.replace(/\\n/g, '\n'), {
                language: data.getSnippet.language,
                ignoreIllegals: true,
            });
        } else {
            document.location.assign('/');
        }
    }



    return (
        
        <div className="container snippet-detail">
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row ">
                    <div className="col s12 m7 ">
                        <h3 className="" id="snippet-title">{data.getSnippet.title}</h3>
                        <div className="card mb-5" id="snippet-card">
                            <div className="card-header">
                            
                        <p className="lead mb-3" id="snippet-description">{data.getSnippet.description}</p>
                                {data.getSnippet.language}
                            </div>
                            <div className="card-body p-0">
                                <pre className="m-0"><code className={'hljs language-' + hljsData.language.toLowerCase()} dangerouslySetInnerHTML={{__html: hljsData.value}}></code></pre>
                            </div>
                            <div className="card-footer">
                                <i className="bi bi-hand-thumbs-up-fill"></i>{data.getSnippet.like} <i class="bi bi-hand-thumbs-down-fill"></i>{data.getSnippet.dislike}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m5" tabIndex="0" id="comments">    
                        {isLoggedIn ? (
                            <CommentForm />
                        ) : null}
                        <CommentsList comments={data.getSnippet.comments}/>
                    </div>
                </div>
            )}
        </div>
    );
}


export default SnippetDetail;
