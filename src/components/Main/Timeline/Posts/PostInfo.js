export default function PostInfo({ dataFromPost: { postInfo } }) {
    return (
        <div className="post__info">
            <a
                href={postInfo.hrefLikedBy}
                className="link-profile-icon">
                <img
                    src={"./images/icons/" + postInfo.srcLikedBy}
                    alt={"Ícone: " + postInfo.likedBy}
                    className="post__info__user-icon" />
            </a>
            <p>Curtido por
                <a
                    href={postInfo.hrefLikedBy}
                    className="link-profile-2">{" " + postInfo.likedBy + " "}</a>
                e
                <a
                    href={postInfo.hrefLikes}
                    className="link-profile-1"> outras {" " + postInfo.amountLikes + " "} pessoas</a></p>
        </div>
    )
}