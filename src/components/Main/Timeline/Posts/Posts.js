import Post from "./Post"

let posts = [
    {
        userInfo: {
            nameUser: "Mark",
            srcUser: "mark-icon.jpg",
            hrefUser: "https://github.com/lemoscaio/projeto7-instagram-react",
        },
        contentInfo: {
            srcContent: "mark-post.jpg",
            contentType: "image"
        },
        postInfo: {
            hrefLikedBy: "https://github.com/lemoscaio/projeto7-instagram-react",
            srcLikedBy: "dandalob-icon.jpg",
            likedBy: "dandalob",
            hrefLikes: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountLikes: 101.523,
        },
        commentsInfo: {
            amountComments: 1.778,
            hrefComments: "https://github.com/lemoscaio/projeto7-instagram-react",
            comments: [
                {
                    hrefcommentUser: "https://github.com/lemoscaio/projeto7-instagram-react",
                    commentUser: "lemoscaio",
                    commentContent: "Lindo do papai"
                },
                {
                    hrefcommentUser: "https://github.com/lemoscaio/projeto7-instagram-react",
                    commentUser: "dandalob",
                    commentContent: "Lindo da mamãe"
                }
            ]
        }
    },
    {
        userInfo: {
            nameUser: "Mark",
            srcUser: "mark-icon.jpg",
            hrefUser: "https://github.com/lemoscaio/projeto7-instagram-react",
        },
        contentInfo: {
            srcContent: "mark-video",
            contentType: "video"
        },
        postInfo: {
            hrefLikedBy: "https://github.com/lemoscaio/projeto7-instagram-react",
            srcLikedBy: "dandalob-icon.jpg",
            likedBy: "dandalob",
            hrefLikes: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountLikes: 101.523,
        },
        commentsInfo: {
            hrefComments: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountComments: 0,
            comments: [
            ]
        }
    },
    {
        userInfo: {
            nameUser: "casimiro",
            srcUser: "casimiro-icon.jpg",
            hrefUser: "https://github.com/lemoscaio/projeto7-instagram-react",
        },
        contentInfo: {
            srcContent: "casimiro-post.jpg",
            contentType: "image"
        },
        postInfo: {
            hrefLikedBy: "https://github.com/lemoscaio/projeto7-instagram-react",
            srcLikedBy: "lemoscaio-icon.jpg",
            likedBy: "lemoscaio",
            hrefLikes: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountLikes: 199.954,
        },
        commentsInfo: {
            hrefComments: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountComments: 0,
            comments: [
            ]
        }
    },
    {
        userInfo: {
            nameUser: "meltedvideos",
            srcUser: "meltedvideos-icon.jpg",
            hrefUser: "https://github.com/lemoscaio/projeto7-instagram-react",
        },
        contentInfo: {
            srcContent: "meltedvideos-post.jpg",
            contentType: "image"
        },
        postInfo: {
            hrefLikedBy: "https://github.com/lemoscaio/projeto7-instagram-react",
            srcLikedBy: "dandalob-icon.jpg",
            likedBy: "dandalob",
            hrefLikes: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountLikes: 103.974,
        },
        commentsInfo: {
            hrefComments: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountComments: 0,
            comments: [
            ]
        }
    },
    {
        userInfo: {
            nameUser: "thedreamsetup",
            srcUser: "thedreamsetup-icon.jpg",
            hrefUser: "https://github.com/lemoscaio/projeto7-instagram-react",
        },
        contentInfo: {
            srcContent: "thedreamsetup-post.jpg",
            contentType: "image"
        },
        postInfo: {
            hrefLikedBy: "https://github.com/lemoscaio/projeto7-instagram-react",
            srcLikedBy: "lemoscaio-icon.jpg",
            likedBy: "lemoscaio",
            hrefLikes: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountLikes: 1.903,
        },
        commentsInfo: {
            hrefComments: "https://github.com/lemoscaio/projeto7-instagram-react",
            amountComments: 0,
            comments: [
            ]
        }
    },
]

export default function Posts() {
    return (
        // Timeline - Posts
        <section className="posts">
            {posts.map((post) => {
                return (
                    <Post dataFromPosts={post} />
                )
            })}
        </section >
    )
}
