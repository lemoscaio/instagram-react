export default function Postconteudo(props) {
    let { srcConteudo } = props
    return (
        < div class="post__conteudo" >
            <img class="post__conteudo__imagem" src={"conteudos/" + srcConteudo} alt="Conteúdo do post" />
        </div >
    )
}