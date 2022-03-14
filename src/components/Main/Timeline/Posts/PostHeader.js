export default function PostHeader({ dataFromPost: { userInfo } }) {
    return (
        <div className="post__header">
            <div className="post__header__user">
                <a href={userInfo.hrefUser} className="link-profile-icone">
                    <img className="post__header__user__user-icon" src={"./images/icons/" + userInfo.srcUser}
                        alt={"Ícone: " + userInfo.nameUser} />
                </a>
                <a href={userInfo.hrefUser} className="link-profile-1">
                    <p className="post__header__user__user-name">
                        {userInfo.nameUser}
                    </p>
                </a>
            </div>
            <ion-icon className="button" name="ellipsis-horizontal"></ion-icon>
        </div >
    )
}