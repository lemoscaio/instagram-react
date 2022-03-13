export default function PostInfo(post) {
    return (
        <div class="post__info">
            <a href="#" class="link-perfil-icone">
                <img src="conteudos/dandalob-icone.jpg" alt="Ícone de Usuário"
                    class="post__info__icone-usuario" />
            </a>
            <p>Curtido por <a href={post.dataFromPost.dataFromPosts.hrefCurtidoPor} class="link-perfil-2">{post.dataFromPost.dataFromPosts.curtidoPor}</a> e <a href={post.dataFromPost.dataFromPosts.hrefCurtidas}
                class="link-perfil-1">outras {post.dataFromPost.dataFromPosts.qtdCurtidas} pessoas</a></p>
        </div>
    )
}