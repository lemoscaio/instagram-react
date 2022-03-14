import Post from "./Post"

// let posts = [
//     {
//         userPostador: {
//             nameuser: "Mark",
//             srcuser: "mark-icon.jpg",
//             hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
//             srccontent: "mark-post.jpg"
//         },
//         curtidas: {
//             hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
//             curtidoPor: "dandalob",
//             hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
//             qtdCurtidas: "101.523"
//         },
//         comments: {
//             qtdcomments: "999",
//             comments: [
//                 {
//                     commentuser: "lemoscaio",
//                     commentcontent: "Lindo do papai"
//                 },
//                 {
//                     commentuser: "dandalob",
//                     commentcontent: "Lindo da mamãe"
//                 }
//             ]
//         }
//     }
// ]

let posts = [
    {
        nameuser: "Mark",
        srcuser: "mark-icon.jpg",
        hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
        srccontent: "mark-post.jpg",
        contentType: "image",
        hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcCurtidoPor: "dandalob-icon.jpg",
        curtidoPor: "dandalob",
        hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
        qtdCurtidas: "101.523",
        qtdcomments: "1.778",
        comments: [
            {
                hrefcommentuser: "https://github.com/lemoscaio/projeto7-instagram-react",
                commentuser: "lemoscaio",
                commentcontent: "Lindo do papai"
            },
            {
                hrefcommentuser: "https://github.com/lemoscaio/projeto7-instagram-react",
                commentuser: "dandalob",
                commentcontent: "Lindo da mamãe"
            }
        ]
    },
    {
        nameuser: "Mark",
        srcuser: "mark-icon.jpg",
        hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
        srccontent: "mark-video",
        contentType: "video",
        hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcCurtidoPor: "dandalob-icon.jpg",
        curtidoPor: "dandalob",
        hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
        qtdCurtidas: "101.523",
        qtdcomments: "1.778",
        comments: [
            {
                hrefcommentuser: "https://github.com/lemoscaio/projeto7-instagram-react",
                commentuser: "lemoscaio",
                commentcontent: "Lindo do papai"
            },
            {
                hrefcommentuser: "https://github.com/lemoscaio/projeto7-instagram-react",
                commentuser: "dandalob",
                commentcontent: "Lindo da mamãe"
            }
        ]
    },
    {
        nameuser: "casimiro",
        srcuser: "casimiro-icon.jpg",
        hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
        srccontent: "casimiro-post.jpg",
        contentType: "image",
        hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcCurtidoPor: "lemoscaio-icon.jpg",
        curtidoPor: "lemoscaio",
        hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
        qtdCurtidas: "199.954",
        comments: [
        ]
    },
    {
        nameuser: "meltedvideos",
        srcuser: "meltedvideos-icon.jpg",
        hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
        srccontent: "meltedvideos-post.jpg",
        contentType: "image",
        hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcCurtidoPor: "dandalob-icon.jpg",
        curtidoPor: "dandalob",
        hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
        qtdCurtidas: "103.974",
        comments: [
        ]
    },
    {
        nameuser: "thedreamsetup",
        srcuser: "thedreamsetup-icon.jpg",
        hrefuser: "https://github.com/lemoscaio/projeto7-instagram-react",
        srccontent: "thedreamsetup-post.jpg",
        contentType: "image",
        hrefCurtidoPor: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcCurtidoPor: "lemoscaio-icon.jpg",
        curtidoPor: "lemoscaio",
        hrefCurtidas: "https://github.com/lemoscaio/projeto7-instagram-react",
        qtdCurtidas: "1.903",
        comments: [
        ]
    }
]

export default function Posts() {
    return (
        // Timeline com posts
        <section className="posts">
            {posts.map((post) => {
                return (
                    <Post dataFromPosts={post} />
                )
            })}
        </section >
    )
}
