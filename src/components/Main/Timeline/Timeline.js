import Stories from "./Stories/Stories"
import Posts from "./Posts/Posts"

export default function Timeline() {
    return (
        <div className="timeline__coluna-principal">
                <Stories />
                <Posts />
            </div>
    )
}