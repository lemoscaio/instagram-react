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
        comentarioConteudo: "Lindo do papai",
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
        listaComentarios: [
            {
                comentarioUsuario: "lemoscaio",
                comentarioConteudo: "Lindo do papai"
            },
            {
                comentarioUsuario: "dandalob",
                comentarioConteudo: "Lindo da mamãe"
            },
            {
                comentarioUsuario: "dandalob",
                comentarioConteudo: "Lindo da mamãe"
            },
            {
                comentarioUsuario: "dandalob",
                comentarioConteudo: "Lindo da mamãe"
            }
        ]
    }
]

let { hrefUsuario, srcUsuario, nomeUsuario, srcConteudo, hrefCurtidoPor, srcCurtidoPor, curtidoPor, hrefCurtidas, qtdCurtidas, qtdComentarios, listaComentarios, comentarioUsuario, comentarioConteudo } = posts[0]

export default function Posts() {
    return (
        // Timeline com posts
        <section class="posts">
            {posts.map((post) => {
                return (
                    <Post
                        hrefUsuario={hrefUsuario}
                        srcUsuario={srcUsuario}
                        nomeUsuario={nomeUsuario}
                        srcConteudo={srcConteudo}
                        hrefCurtidoPor={hrefCurtidoPor}
                        srcCurtidoPor={srcCurtidoPor}
                        curtidoPor={curtidoPor}
                        hrefCurtidas={hrefCurtidas}
                        qtdCurtidas={qtdCurtidas}
                        qtdComentarios={qtdComentarios}
                        comentarioUsuario={comentarioUsuario}
                        comentarioConteudo={comentarioConteudo}
                    />
                )
            })}
        </section >
    )
}
