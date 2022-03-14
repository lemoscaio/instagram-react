export default function PostHeader(post) {

    return (
        <div class="post__header">
            <div class="post__header__usuario">
                <a href={post.dataFromPost.dataFromPosts.hrefUsuario} class="link-perfil-icone">
                    <img class="post__header__usuario__icone-usuario" src={"conteudos/" + post.dataFromPost.dataFromPosts.srcUsuario}
                        alt={"Ícone: " + post.dataFromPost.dataFromPosts.nomeUsuario} />
                </a>
                <a href={post.dataFromPost.dataFromPosts.hrefUsuario} class="link-perfil-1">
                    <p class="post__header__usuario__nome-usuario">
                        {post.dataFromPost.dataFromPosts.nomeUsuario}
                    </p>
                </a>
            </div>
            <ion-icon class="botao" name="ellipsis-horizontal"></ion-icon>
        </div >
    )
}