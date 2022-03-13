export default function Postconteudo(post) {
    return (
        < div class="post__conteudo" >
            <img class="post__conteudo__imagem" src={"conteudos/" + post.dataFromPost.dataFromPosts.srcConteudo} alt="Conteúdo do post" />
        </div >
    )
}