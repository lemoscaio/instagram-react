export default function Story(props) {
    let { href, src, alt, nomeUsuario } = props
    return (
        <a href={href} class="link">
            <div class="story">
                <div class="story__icone-usuario">
                    <img class="story__icone-usuario__imagem" src={"./conteudos/" + src}
                        alt={"Ícone: " + alt} />
                </div>
                <p class="story__nome-usuario">
                    {nomeUsuario}
                </p>
            </div>
        </a>
    )
}