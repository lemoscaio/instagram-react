import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostMenu from "./PostMenu";

export default function Post(post) {
    return (
        <article className="post">

            <PostHeader dataFromPost={post} />
            <PostContent dataFromPost={post} />
            <PostMenu />
            <PostInfo dataFromPost={post} />
            <PostComments dataFromPost={post} />

        </article>
    )
}