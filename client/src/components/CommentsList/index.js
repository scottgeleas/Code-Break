function CommentsList(props) {
    const { comments } = props;

    return (
        <>
            <h3>Comments</h3>
            {comments.length ? (
                comments.map((item, index) => {
                    return (
                        <div className="card mb-2" key={index}>
                            <div className="card-body">
                                <p className="mb-1">{item.text}</p> 
                            </div>
                            <div className="card-footer">
                            <div className="d-flex w-100 justify-content-between">
                                    <small className="text-muted">{item.author}</small>
                                    {/* <small className="text-muted">3 days ago</small> */}
                                </div>

                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No comments.</p>
            )}
        </>
    );
}

export default CommentsList;
