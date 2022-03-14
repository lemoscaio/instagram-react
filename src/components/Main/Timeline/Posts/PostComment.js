export default function PostComment(props) {
    let { hrefcommentuser, commentuser, commentcontent } = props
    return (
        <div className="comments__comment comment">

            <div className="comment__set">
                <a href={hrefcommentuser} className="link-profile-2">
                    <p className="comment__user">{commentuser}</p>
                </a>
                <p className="comment__text">{commentcontent}</p>
            </div>

            <div className="comment__like button">
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
    )
}