import PostComentarios from "./PostComentarios";
import Postconteudo from "./PostConteudo";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostMenu from "./PostMenu";

export default function Post(post) {
    return (
        <article class="post">

            <PostHeader dataFromPost={post} />
            <Postconteudo dataFromPost={post} />
            <PostMenu />
            <PostInfo dataFromPost={post} />
            <PostComentarios dataFromPost={post} />

        </article>
    )
}