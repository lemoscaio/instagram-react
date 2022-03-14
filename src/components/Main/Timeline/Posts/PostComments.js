import PostComment from "./PostComment"

export default function PostComments({ dataFromPost: { commentsInfo } }) {
    return (
        <div className="post__comments-section">
            <div className="post__comments comments">
                <a
                    href={commentsInfo.hrefcommentUser}
                    className="link-profile-1">
                    {commentsInfo.comments.length > 0 &&
                        <p><small>
                            Ver todos os {commentsInfo.amountComments} comentários
                        </small></p>}
                </a>

                {commentsInfo.comments.map((comment) => {
                    return (<PostComment
                        hrefcommentUser={comment.hrefcommentUser}
                        commentUser={comment.commentUser}
                        commentContent={comment.commentContent}
                    />)
                })}

            </div>
            <div className="post__comments__add-comment add-comment">
                <ion-icon name="happy-outline"></ion-icon>
                <input className="post__comments__add-comment__input" type="text"
                    placeholder="Adicione um comentário..." autoComplete="off" />
                <p className="post__comments__add-comment__button">Publicar</p>

            </div>
        </div>
    )
}