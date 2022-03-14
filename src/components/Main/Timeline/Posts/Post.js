import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostMenu from "./PostMenu";

export default function Post({ dataFromPosts }) {
    return (
        <article className="post">

            <PostHeader dataFromPost={dataFromPosts} />
            <PostContent dataFromPost={dataFromPosts} />
            <PostMenu />
            <PostInfo dataFromPost={dataFromPosts} />
            <PostComments dataFromPost={dataFromPosts} />

        </article>
    )
}