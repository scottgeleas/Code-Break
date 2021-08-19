import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './css/index.css';


import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SNIPPET } from '../../utils/queries';

import CommentForm from '../CommentForm/index';
import CommentsList from '../CommentsList/index';
// import Filter from '../Filter/index'

function SnippetDetail() {
    const { snippetId } = useParams();

    const { loading, data } = useQuery(GET_SNIPPET, {
        variables: {
            id: snippetId,
        },
    });

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
            {/* {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : ( */}
                <div class="row">
                    <div class="col s12 m7">
                        <h2 className="display-3" id="snippet-title">{data.getSnippet.title}</h2>
                        <p className="lead mb-3" id="snippet-description">{data.getSnippet.description}</p>
                        <div className="card mb-5" id="snippet-card">
                            <div className="card-header">
                                {data.getSnippet.language}
                            </div>
                            <div className="card-body p-0">
                                <pre className="m-0"><code className={'hljs language-' + hljsData.language.toLowerCase()} dangerouslySetInnerHTML={{__html: hljsData.value}}></code></pre>
                            </div>
                            <div class="card-footer">
                                <i class="bi bi-hand-thumbs-up-fill"></i>{data.getSnippet.like} <i class="bi bi-hand-thumbs-down-fill"></i>{data.getSnippet.dislike}
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m" tabIndex="0" id="comments">    
                        <CommentForm snippetId={data.getSnippet._id} />
                        <CommentsList comments={data.getSnippet.comments}/>            
                    </div>
                </div>
        </div>
    )}


export default SnippetDetail;
