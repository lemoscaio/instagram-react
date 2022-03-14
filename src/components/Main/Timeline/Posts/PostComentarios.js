import PostComentario from "./PostComentario"

export default function PostComentarios(post) {
    return (
        <div class="post__secao-comentarios">
            <div class="post__comentarios comentarios">
                <a href="#" class="link-perfil-1">
                    <p><small>Ver todos os {post.dataFromPost.dataFromPosts.qtdComentarios} comentários</small></p>
                </a>

                {post.dataFromPost.dataFromPosts.listaComentarios.map((comentario) => {
                    return (<PostComentario
                        hrefComentarioUsuario={comentario.hrefComentarioUsuario}
                        comentarioUsuario={comentario.comentarioUsuario} comentarioConteudo={comentario.comentarioConteudo}
                    />)
                })}

            </div>
            <div class="post__comentarios__adicionar-comentario adicionar-comentario">
                <ion-icon name="happy-outline"></ion-icon>
                <input class="post__comentarios__adicionar-comentario__input" type="text"
                    placeholder="Adicione um comentário..." autocomplete="off" />
                <p class="post__comentarios__adicionar-comentario__botao">Publicar</p>

            </div>
        </div>
    )
}