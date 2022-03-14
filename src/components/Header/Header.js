export default function Header() {
    return (
        <header className="header-background">
            <nav className="header">
                <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button header__icon-button--desktop">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <div className="header__desktop-set">
                    <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button header__icon-button--mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__logo">
                        <img src="./images/icons/logo.png" alt="Logo do Instagram" />
                    </a>
                </div>
                <div className="header__desktop-set middle">
                    <input className="header__desktop-set__search-box" placeholder="Pesquisar" autoComplete="off"
                        type="search" name="Caixa de Pesquisa" id="search-box" />
                </div>
                <div className="header__desktop-set">
                    <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    <div className="header__icons-set header__icons-set--mobile">
                        <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button">
                            <ion-icon name="compass-outline"></ion-icon>
                        </a>
                        <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button">
                            <ion-icon name="heart-outline"></ion-icon>
                        </a>
                        <a href="https://github.com/lemoscaio/projeto7-instagram-react" className="header__icon-button">
                            <ion-icon name="person-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}