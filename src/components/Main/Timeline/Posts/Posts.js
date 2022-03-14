import Post from "./Post"

// let posts = [
//     {
//         usuarioPostador: {
//             nomeUsuario: "Mark",
//             srcUsuario: "mark-icone.jpg",
//             hrefUsuario: "#",
//             srcConteudo: "mark-post.jpg"
//         },
//         curtidas: {
//             hrefCurtidoPor: "#",
//             curtidoPor: "dandalob",
//             hrefCurtidas: "#",
//             qtdCurtidas: "101.523"
//         },
//         comentarios: {
//             qtdComentarios: "999",
//             listaComentarios: [
//                 {
//                     comentarioUsuario: "lemoscaio",
//                     comentarioConteudo: "Lindo do papai"
//                 },
//                 {
//                     comentarioUsuario: "dandalob",
//                     comentarioConteudo: "Lindo da mamãe"
//                 }
//             ]
//         }
//     }
// ]

let posts = [
    {
        nomeUsuario: "Mark",
        srcUsuario: "mark-icone.jpg",
        hrefUsuario: "#",
        srcConteudo: "mark-post.jpg",
        hrefCurtidoPor: "#",
        srcCurtidoPor: "dandalob-icone.jpg",
        curtidoPor: "dandalob",
        hrefCurtidas: "#",
        qtdCurtidas: "101.523",
        qtdComentarios: "999",
        comentarioUsuario: "lemoscaio",
        listaComentarios: [
            {
                hrefComentarioUsuario: "#",
                comentarioUsuario: "lemoscaio",
                comentarioConteudo: "Lindo do papai"
            },
            {
                hrefComentarioUsuario: "#",
                comentarioUsuario: "dandalob",
                comentarioConteudo: "Lindo da mamãe"
            }
        ]
    },
    {
        nomeUsuario: "Mark",
        srcUsuario: "mark-icone.jpg",
        hrefUsuario: "#",
        srcConteudo: "mark-post.jpg",
        hrefCurtidoPor: "#",
        srcCurtidoPor: "dandalob-icone.jpg",
        curtidoPor: "dandalob",
        hrefCurtidas: "#",
        qtdCurtidas: "101.523",
        qtdComentarios: "999",
        comentarioUsuario: "lemoscaio",
        listaComentarios: [
            {
                hrefComentarioUsuario: "#",
                comentarioUsuario: "lemoscaio",
                comentarioConteudo: "Lindo do papai"
            },
            {
                hrefComentarioUsuario: "#",
                comentarioUsuario: "dandalob",
                comentarioConteudo: "Lindo da mamãe"
            }
        ]
    }
]

export default function Posts() {
    return (
        // Timeline com posts
        <section class="posts">
            {posts.map((post) => {
                return (
                    <Post dataFromPosts={post} />
                )
            })}
        </section >
    )
}
