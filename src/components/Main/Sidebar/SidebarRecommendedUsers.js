export default function SidebarRecommendedUsers(recommendedUser) {
    return (
        <div className="recommended-users__set">
            <div className="recommended-users__set_recommended-user recommended-user">
                <a href={recommendedUser.dataFromSidebar.hrefRecommendedUserIcon} className="link-profile-icon">
                    <img src={"./images/icons/" + recommendedUser.dataFromSidebar.srcRecommendedUserIcon} alt="Ícone de Usuário"
                        className="recommended-user__user-icon" />
                </a>
                <div className="recommended-user__name">
                    <a href={recommendedUser.dataFromSidebar.hrefRecommendedUserIcon} className="link-profile-2">
                        <p className="recommended-user__name__user">{recommendedUser.dataFromSidebar.recommendedUserName}
                        </p>
                    </a>
                    <p className="recommended-user__name__status">{recommendedUser.dataFromSidebar.recommendedUsertatus}</p>
                </div>
            </div>
            <p className="recommended-users__follow-button">Seguir</p>
        </div>
    )
}