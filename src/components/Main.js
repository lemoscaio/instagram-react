import Timeline from "./Timeline"
import SideBar from "./SideBar"
import MobileFooter from "./MobileFooter"

export default function Main() {
    return (
        <main class="timeline">
            <Timeline />
            <SideBar />
            <MobileFooter />
        </main>
    )
}