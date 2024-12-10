import NavBar from "./components/NavBar/NavBar";

export default function Projects()
{
    document.title = 'Projects';
    return (
        <div className="font-mono">
            <NavBar title='Projects'/>
            <h1>PROJECTS</h1>
        </div>
    );
}