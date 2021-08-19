import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';


import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SNIPPET } from '../../utils/queries';

import CommentForm from '../CommentForm/index';
import CommentsList from '../CommentsList/index';

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
        <div className="container-xxl snippet-detail">
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <h2 className="display-3 text-white">{data.getSnippet.title}</h2>
                        <p className="lead mb-3 text-white">{data.getSnippet.description}</p>
                    <div className="card mb-5">
                        <div className="card-header">
                            {data.getSnippet.language}
                        </div>
                        <div className="card-body p-0">
                            <pre className="m-0"><code className={'hljs language-' + hljsData.language.toLowerCase()} dangerouslySetInnerHTML={{__html: hljsData.value}}></code></pre>
                        </div>
                        <div className="card-footer">
                            <i className="bi bi-hand-thumbs-up-fill"></i>{data.getSnippet.like} <i className="bi bi-hand-thumbs-down-fill"></i>{data.getSnippet.dislike}
                        </div>
                    </div>
                    <CommentForm snippetId={data.getSnippet._id} />
                    <CommentsList comments={data.getSnippet.comments}/>
                </>
            )}
        </div>
    );
}

export default SnippetDetail;
