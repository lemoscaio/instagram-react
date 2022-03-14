export default function PostHeader(post) {

    return (
        <div className="post__header">
            <div className="post__header__user">
                <a href={post.dataFromPost.dataFromPosts.hrefuser} className="link-profile-icone">
                    <img className="post__header__user__user-icon" src={"./images/icons/" + post.dataFromPost.dataFromPosts.srcuser}
                        alt={"Ícone: " + post.dataFromPost.dataFromPosts.nameuser} />
                </a>
                <a href={post.dataFromPost.dataFromPosts.hrefuser} className="link-profile-1">
                    <p className="post__header__user__user-name">
                        {post.dataFromPost.dataFromPosts.nameuser}
                    </p>
                </a>
            </div>
            <ion-icon className="button" name="ellipsis-horizontal"></ion-icon>
        </div >
    )
}