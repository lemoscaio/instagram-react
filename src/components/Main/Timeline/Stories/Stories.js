import Story from "./Story"

let stories = [
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "mark-icon.jpg",
        name: "Você"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "bowie-icon.jpg",
        name: "bowie.collie"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "caio-icon.jpg",
        name: "lemos_caio"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "dandalob-icon.jpg",
        name: "dandalob"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "casimiro-icon.jpg",
        name: "casimiro"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "meltedvideos-icon.jpg",
        name: "meltedvideos"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "alanzoka-icon.jpg",
        name: "alanzoka"
    },
    {
        link: "https://github.com/lemoscaio/projeto7-instagram-react",
        image: "salsichinhasbr-icon.jpg",
        name: "salsichinhasbr"
    }
]

export default function Stories() {
    return (
        <section className="stories">
            <div className="stories__arrow-right button">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            {stories.map((story) => {
                return (
                    <Story
                        href={story.link}
                        src={story.image}
                        alt={story.name}
                        nameUser={story.name}
                    />)
            })}
        </section>)
}
