import SidebarRecommendedUsers from "./SidebarRecommendedUsers"
import User from "./User.js"

let user = {
    userIdName: "markito2021",
    userRealName: "Mark Lemos",
    srcUserImage: "mark-icon.jpg"
}

let recommendedUsers = [
    {
        hrefRecommendedUserIcon: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcRecommendedUserIcon: "recommended-user-1.jpg",
        recommendedUserName: "loki",
        recommendedUsertatus: "Segue você"
    },
    {
        hrefRecommendedUserIcon: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcRecommendedUserIcon: "recommended-user-2.jpg",
        recommendedUserName: "pipoca",
        recommendedUsertatus: "Segue você"
    },
    {
        hrefRecommendedUserIcon: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcRecommendedUserIcon: "recommended-user-3.jpg",
        recommendedUserName: "nina",
        recommendedUsertatus: "Segue você"
    },
    {
        hrefRecommendedUserIcon: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcRecommendedUserIcon: "recommended-user-4.jpg",
        recommendedUserName: "luna",
        recommendedUsertatus: "Segue você"
    },
    {
        hrefRecommendedUserIcon: "https://github.com/lemoscaio/projeto7-instagram-react",
        srcRecommendedUserIcon: "recommended-user-5.jpg",
        recommendedUserName: "driven.education",
        recommendedUsertatus: "Segue você"
    },
]

export default function Sidebar() {
    return (
        <div className="timeline__coluna-secundaria">
            <aside className="sidebar">

                {<User dataFromSidebar={user} />}

                <div className="sidebar__recommended-users recommended-users">

                    <div className="recommended-users__header-row">
                        <p><small>Sugestões para você</small></p>
                        <p><a href="https://github.com/lemoscaio/projeto7-instagram-react" className="link-profile-1">Ver tudo</a></p>
                    </div>

                    {recommendedUsers.map((recommendedUser) => {
                        return (
                            <SidebarRecommendedUsers dataFromSidebar={recommendedUser} />
                        )
                    })}

                </div>
                <div className="sidebar__footer">
                    <ul className="sidebar__footer__list list">
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react" >Sobre</a></li>
                        <li className=" list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Ajuda</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Imprensa</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">API</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Carreiras</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Privacidade</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Termos</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Localizações</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Contas mais relevantes</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Hashtags</a></li>
                        <li className="list-link"><a href="https://github.com/lemoscaio/projeto7-instagram-react">Idiomas</a></li>
                    </ul>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </aside>
        </div>
    )

}