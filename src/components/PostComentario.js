export default function PostComentario(props) {
    let { hrefComentarioUsuario, comentarioUsuario, comentarioConteudo } = props
    return (
        <div class="comentarios__comentario comentario">

            <div class="comentario__conjunto">
                <a href={hrefComentarioUsuario} class="link-perfil-2">
                    <p class="comentario__user">{comentarioUsuario}</p>
                </a>
                <p class="comentario__texto">{comentarioConteudo}</p>
            </div>

            <div class="comentario__like botao">
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
    )
}