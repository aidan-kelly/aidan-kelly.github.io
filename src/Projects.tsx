import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";

export default function Projects()
{
    document.title = 'Projects';
    return (
        <div className="font-mono">
            <NavBar title='Projects'/>
            <Header title="Projects"/>
        </div>
    );
}