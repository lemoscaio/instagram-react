export default function PostInfo({ dataFromPost: { postInfo } }) {
    return (
        <div className="post__info">
            <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="link-profile-icone">
                <img src="./images/icons/dandalob-icon.jpg" alt="Ícone de Usuário"
                    className="post__info__user-icon" />
            </a>
            <p>Curtido por <a href={postInfo.hrefLikedBy} className="link-profile-2">{postInfo.likedBy}</a> e <a href={postInfo.hrefLikes}
                className="link-profile-1">outras {postInfo.amountLikes} pessoas</a></p>
        </div>
    )
}