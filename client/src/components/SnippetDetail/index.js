import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_SNIPPET } from '../../utils/queries';

function SnippetDetail() {
    const { id } = useParams();

    const { loading, data } = useQuery(GET_SNIPPET, {
        variables: {
            snippetId: id,
        },
    });

    let hljsData = '';

    if (!loading) {
        hljsData = hljs.highlight(data.getSnippet.code.replace(/\\n/g, '\n'), {
            language: data.getSnippet.language,
            ignoreIllegals: true,
        });
        // console.log(hljsData);
    }

    return (
        <div className="container-xxl snippet-detail">
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <h2 className="display-3">{data.getSnippet.title}</h2>
                    <p className="lead">{data.getSnippet.description}</p>
                    <div className="card">
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

                    {/* {data.getSnippet.isPublic ? (<p>Public</p>) : ('')} */}
                </>
            )}
        </div>
    );
}

export default SnippetDetail;
