import Stories from "./Stories/Stories"
import Posts from "./Posts/Posts"

export default function Timeline() {
    return (
        <div class="timeline__coluna-principal">
                <Stories />
                <Posts />
            </div>
    )
}