import {Header} from "../../../components";

const Dashboard = () => {
    const user = {
        name: "admin"
    }

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

            Dashboard content
        </main>
    )
}
export default Dashboard
