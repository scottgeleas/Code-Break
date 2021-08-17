function CommentsList(props) {
    const { comments } = props;

    let commentsHtml = '';

    if (comments.length) {
        commentsHtml = comments.map(item => {
            return (
                <div class="card mb-2">
                    <div class="card-body">
                        <p className="mb-1">{item.text}</p>
                        <div className="d-flex w-100 justify-content-between">
                            <small className="text-muted">{item.author}</small>
                            <small className="text-muted">3 days ago</small>
                        </div>
                    </div>
                </div>
            );
        })
    } else {
        commentsHtml = (
            <p>No comments.</p>
        );
    }

    return (
        <>
            <h3 className="display-5">Comments</h3>
            {commentsHtml}
        </>
    );
}

export default CommentsList;
