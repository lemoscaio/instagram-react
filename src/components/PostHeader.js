export default function PostHeader(props) {
    let { hrefUsuario, srcUsuario, nomeUsuario } = props
    return (
        <div class="post__header">
            <div class="post__header__usuario">
                <a href={hrefUsuario} class="link-perfil-icone">
                    <img class="post__header__usuario__icone-usuario" src={"conteudos/" + srcUsuario}
                        alt={"Ícone: " + nomeUsuario} />
                </a>
                <a href="#" class="link-perfil-1">
                    <p class="post__header__usuario__nome-usuario">
                        {nomeUsuario}
                    </p>
                </a>
            </div>
            <ion-icon class="botao" name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}