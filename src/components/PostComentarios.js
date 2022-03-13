import PostComentario from "./PostComentario"

export default function PostComentarios(props, { listaComentarios }) {
    let { qtdComentarios } = props
    return (
        <div class="post__secao-comentarios">
            <div class="post__comentarios comentarios">
                <a href="#" class="link-perfil-1">
                    <p><small>Ver todos os {qtdComentarios} comentários</small></p>
                </a>
                {/* {listaComentarios.map(({ comentarioUsuario, comentarioConteudo }) => {
                    <PostComentario comentarioUsuario={comentarioUsuario} comentarioConteudo={comentarioConteudo} />
                })} */}

                <PostComentario comentarioUsuario="lemos_caio" comentarioConteudo="Lindo do papai" />
                {/* <PostComentario comentarioUsuario="dandalob" comentarioConteudo="Lindo da mamãe" /> */}

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