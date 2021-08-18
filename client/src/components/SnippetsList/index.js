import './css/index.css';
import { useLocation } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_ALL_SNIPPETS, GET_ME } from '../../utils/queries';

import SnippetEditForm from '../SnippetEditForm';
import RemoveSnippet from '../RemoveSnippet';

function SnippetsList(props) {
    const { loading: snippetsLoading, data: snippetsData } = useQuery(GET_ALL_SNIPPETS);
    const { loading: userLoading, data: userData } = useQuery(GET_ME);

    const { languageFilter } =  props;
    let snippetsList = [];

    const { pathname } = useLocation();
    const isDashboard = pathname.includes('dashboard')

    if ((!snippetsLoading && snippetsData)
    && (!userLoading && userData)) {
        snippetsList = snippetsData.getAllSnippets;

        if (isDashboard) {
            snippetsList = snippetsList.filter(item => {
                return item.author === userData.getMe.username;
            });
        }

        if (languageFilter !== '') {
            snippetsList = snippetsList.filter(item => {
                return item.language === languageFilter;
            });
        }
    }

    return (
        <>
            {snippetsLoading && userLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                snippetsList.length ? (
                    <ul className="snippets-list p-0">
                        {snippetsList.map((item, index) => {
                            return (
                                <li className="card mb-3" key={index}>
                                    <div className="card-header d-flex justify-content-md-between align-items-md-center">
                                        <h3 className="h4">{item.title}</h3>
                                        <div className="likes-wrap">
                                            <i className="bi bi-hand-thumbs-up-fill"></i>{item.like} <i className="bi bi-hand-thumbs-down-fill"></i>{item.dislike}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                        <a href={`/snippets/${item._id}`} className="stretched-link">View Code Snippet</a>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <div className="snippet-info-wrap d-flex align-items-md-center">
                                            <small className="text-muted">by <em>{item.author}</em></small>
                                            <div className="vr mx-2"></div>
                                            <small className="text-muted">{item.language}</small>
                                        </div>
                                        {isDashboard ? (
                                            <div className="btn-group" role="group" aria-label="Snippet Actions">
                                                <SnippetEditForm snippetData={item} />
                                                <RemoveSnippet snippetId={item._id} />
                                            </div>
                                        ) : null}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No Code Snippets.</p>
                )
            )}
        </>
    );
}

export default SnippetsList;
