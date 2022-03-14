import PostComment from "./PostComment"

export default function PostComments(post) {
    return (
        <div className="post__secao-comments">
            <div className="post__comments comments">
                <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="link-profile-1">
                    {post.dataFromPost.dataFromPosts.comments.length > 0 &&
                        <p><small>
                            Ver todos os {post.dataFromPost.dataFromPosts.qtdcomments} comentários
                        </small></p>}
                </a>

                {post.dataFromPost.dataFromPosts.comments.map((comment) => {
                    return (<PostComment
                        hrefcommentuser={comment.hrefcommentuser}
                        commentuser={comment.commentuser} commentcontent={comment.commentcontent}
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