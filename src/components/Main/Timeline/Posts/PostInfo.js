export default function PostInfo(post) {
    return (
        <div className="post__info">
            <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="link-profile-icone">
                <img src="./images/icons/dandalob-icon.jpg" alt="Ícone de Usuário"
                    className="post__info__user-icon" />
            </a>
            <p>Curtido por <a href={post.dataFromPost.dataFromPosts.hrefCurtidoPor} className="link-profile-2">{post.dataFromPost.dataFromPosts.curtidoPor}</a> e <a href={post.dataFromPost.dataFromPosts.hrefCurtidas}
                className="link-profile-1">outras {post.dataFromPost.dataFromPosts.qtdCurtidas} pessoas</a></p>
        </div>
    )
}