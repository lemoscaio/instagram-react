export default function PostComment(props) {
    let { hrefcommentUser, commentUser, commentContent } = props
    return (
        <div className="comments__comment comment">

            <div className="comment__set">
                <a href={hrefcommentUser} className="link-profile-2">
                    <p className="comment__user">{commentUser}</p>
                </a>
                <p className="comment__text">{commentContent}</p>
            </div>

            <div className="comment__like button">
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
    )
}