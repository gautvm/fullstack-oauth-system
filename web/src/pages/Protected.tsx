import { Navbar } from "../components/Navbar"

export const Protected = () => {
    return (
        <div>
            <Navbar />
            <p className="text-center">Now, you can add pages that you only want authenticated users to see, such as this one.</p>
        </div>
    )
}