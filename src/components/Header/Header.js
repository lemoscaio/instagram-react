export default function Header() {
    return (
        <header class="topo-background">
            <nav class="topo">
                <a href="#" class="topo__icone-botao topo__icone-botao--desktop">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <div class="topo__conjunto-desktop">
                    <a href="#" class="topo__icone-botao topo__icone-botao--mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="#" class="topo__logo">
                        <img src="./imagens/logo.png" alt="Logo do Instagram" />
                    </a>
                </div>
                <div class="topo__conjunto-desktop middle">
                    <input class="topo__conjunto-desktop__caixa-pesquisa" placeholder="Pesquisar" autocomplete="off"
                        type="search" name="Caixa de Pesquisa" id="caixa-pesquisa" />
                </div>
                <div class="topo__conjunto-desktop">
                    <a href="#" class="topo__icone-botao">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    <div class="topo__conjunto-icones topo__conjunto-icones--mobile">
                        <a href="#" class="topo__icone-botao">
                            <ion-icon name="compass-outline"></ion-icon>
                        </a>
                        <a href="#" class="topo__icone-botao">
                            <ion-icon name="heart-outline"></ion-icon>
                        </a>
                        <a href="#" class="topo__icone-botao">
                            <ion-icon name="person-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}