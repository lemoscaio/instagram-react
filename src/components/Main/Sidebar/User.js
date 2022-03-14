export default function User(user) {
    return (

        <div className="sidebar__main-user main-user">
            <a href={user.dataFromSidebar.hrefUserImage} className="link-profile-icon"><img src={"./images/icons/" + user.dataFromSidebar.srcUserImage} alt="Ícone do Usuário"
                className="main-user__user-icon" /></a>
            <div className="main-user__name">
                <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="link-profile-1">
                    <p className="main-user__name__user">{user.dataFromSidebar.userIdName}</p>
                </a>
                <p className="main-user__name__name-real"><small>{user.dataFromSidebar.userRealName}</small></p>
            </div>
        </div>
    )
}
