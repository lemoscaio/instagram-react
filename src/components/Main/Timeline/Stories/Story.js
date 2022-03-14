export default function Story(props) {
    let { href, src, alt, nameuser } = props
    return (
        <a href={href} className="link">
            <div className="story">
                <div className="story__user-icon">
                    <img className="story__user-icon__image" src={"./images/icons/" + src}
                        alt={"Ícone: " + alt} />
                </div>
                <p className="story__user-name">
                    {nameuser}
                </p>
            </div>
        </a>
    )
}