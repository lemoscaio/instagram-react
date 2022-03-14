export default function PostContent({ dataFromPost: { contentInfo } }) {
    let postContent

    if (contentInfo.contentType === "image") {
        postContent = (<img
            className="post__content__image"
            src={"./images/" + contentInfo.srcContent}
            alt="Conteúdo do post" />)
    } else if (contentInfo.contentType === "video") {
        postContent = (
            <video
                loop autoPlay muted
                className="post__content__video"
                alt="Vídeo" >
                <source
                    src={"images/" + contentInfo.srcContent + ".mp4"}
                    type="video/mp4"
                    alt="Vídeo" />
                <source
                    src={"images/" + contentInfo.srcContent + ".ogv"}
                    type="video/ogv"
                    alt="Vídeo" />
            </video>)
    }

    return (
        < div className="post__content" >

            {postContent}

        </div >
    )
}


