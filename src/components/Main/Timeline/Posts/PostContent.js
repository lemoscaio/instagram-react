export default function PostContent(post) {

    let postContent

    if (post.dataFromPost.dataFromPosts.contentType === "image") {
        postContent = (<img className="post__content__image" src={"./images/" + post.dataFromPost.dataFromPosts.srccontent} alt="Conteúdo do post" />)
    } else if (post.dataFromPost.dataFromPosts.contentType === "video") {
        postContent = (<video loop autoPlay muted className="post__content__video" alt="Vídeo" >
            <source src={"images/" + post.dataFromPost.dataFromPosts.srccontent + ".mp4"} type="video/mp4" alt="Vídeo" />
            <source src={"images/" + post.dataFromPost.dataFromPosts.srccontent + ".ogv"} type="video/ogv" alt="Vídeo" />
        </video>)
    }

    return (
        < div className="post__content" >

            {postContent}

        </div >
    )
}


