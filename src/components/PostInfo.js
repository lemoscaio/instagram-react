export default function PostInfo(props) {
    let { hrefCurtidoPor, curtidoPor, hrefCurtidas, qtdCurtidas } = props
    return (
        <div class="post__info">
            <a href="#" class="link-perfil-icone">
                <img src="conteudos/dandalob-icone.jpg" alt="Ícone de Usuário"
                    class="post__info__icone-usuario" />
            </a>
            <p>Curtido por <a href={hrefCurtidoPor} class="link-perfil-2">{curtidoPor}</a> e <a href={hrefCurtidas}
                class="link-perfil-1">outras {qtdCurtidas} pessoas</a></p>
        </div>
    )
}