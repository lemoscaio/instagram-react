import PostComentario from "./PostComentario";
import PostComentarios from "./PostComentarios";
import Postconteudo from "./PostConteudo";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostMenu from "./PostMenu";

export default function Post(props) {
    let { hrefUsuario, srcUsuario, nomeUsuario, srcConteudo, srcCurtidoPor, hrefCurtidoPor, curtidoPor, hrefCurtidas, qtdCurtidas, qtdComentarios, comentarioUsuario, comentarioConteudo } = props

    return (
        <article class="post">

            <div class="post__header">
                <div class="post__header__usuario">
                    <a href={hrefUsuario} class="link-perfil-icone">
                        <img class="post__header__usuario__icone-usuario" src={"conteudos/" + srcUsuario}
                            alt={"Ícone: " + nomeUsuario} />
                    </a>
                    <a href="#" class="link-perfil-1">
                        <p class="post__header__usuario__nome-usuario">
                            {nomeUsuario}
                        </p>
                    </a>
                </div>
                <ion-icon class="botao" name="ellipsis-horizontal"></ion-icon>
            </div>
            < div class="post__conteudo" >
                <img class="post__conteudo__imagem" src={"./conteudos/" + srcConteudo} alt="Conteúdo do post" />
            </div >
            <div class="post__menu">
                <div class="post__menu__icone-botao">
                    <ion-icon class="botao" name="heart-outline"></ion-icon>
                    <ion-icon class="botao" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="botao" name="paper-plane-outline"></ion-icon>
                </div>
                <div class="post__menu__icone-botao">
                    <ion-icon class="botao" name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="post__info">
                <a href={hrefCurtidoPor} class="link-perfil-icone">
                    <img src={"conteudos/" + srcCurtidoPor} alt="Ícone de Usuário"
                        class="post__info__icone-usuario" />
                </a>
                <p>Curtido por <a href={hrefCurtidoPor} class="link-perfil-2">{curtidoPor}</a> e <a href={hrefCurtidas}
                    class="link-perfil-1">outras {qtdCurtidas} pessoas</a></p>
            </div>
            <div class="post__secao-comentarios">
                <div class="post__comentarios comentarios">
                    <a href="#" class="link-perfil-1">
                        <p><small>Ver todos os {qtdComentarios} comentários</small></p>
                    </a>
                    <div class="comentarios__comentario comentario">
                        <div class="comentario__conjunto">
                            <a href="#" class="link-perfil-2">
                                <p class="comentario__user">{comentarioUsuario}</p>
                            </a>
                            <p class="comentario__texto">{comentarioConteudo}</p>
                        </div>

                        <div class="comentario__like botao">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="post__comentarios__adicionar-comentario adicionar-comentario">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input class="post__comentarios__adicionar-comentario__input" type="text"
                        placeholder="Adicione um comentário..." autocomplete="off" />
                    <p class="post__comentarios__adicionar-comentario__botao">Publicar</p>

                </div>
            </div>

        </article>
    )
}