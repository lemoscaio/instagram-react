import Stories from "./Stories/Stories"
import Posts from "./Posts/Posts"

export default function Timeline() {
    return (
        <div className="timeline__main-column">
                <Stories />
                <Posts />
            </div>
    )
}