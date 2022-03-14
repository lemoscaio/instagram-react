import Story from "./Story"

let stories = [
    {
        link: "#",
        image: "mark-icone.jpg",
        name: "Você"
    },
    {
        link: "#",
        image: "bowie-icone.jpg",
        name: "bowie.collie"
    },
    {
        link: "#",
        image: "caio-icone.jpg",
        name: "lemos_caio"
    },
    {
        link: "#",
        image: "dandalob-icone.jpg",
        name: "dandalob"
    },
    {
        link: "#",
        image: "casimiro-icone.jpg",
        name: "casimiro"
    },
    {
        link: "#",
        image: "meltedvideos-icone.jpg",
        name: "meltedvideos"
    },
    {
        link: "#",
        image: "alanzoka-icone.jpg",
        name: "alanzoka"
    },
    {
        link: "#",
        image: "salsichinhasbr-icone.jpg",
        name: "salsichinhasbr"
    }
]

export default function Stories() {
    return (
        <section class="stories">
            <div class="stories__seta-frente botao">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            {stories.map((story) => {
                return (
                    <Story
                        href={story.link}
                        src={story.image}
                        alt={story.name}
                        nomeUsuario={story.name}
                    />)
            })}
        </section>)
}
