import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProjectTile from "./components/ProjectTile";

export default function Projects()
{
    document.title = 'Projects';
    return (
        <div className="font-mono">
            <NavBar title='Projects'/>
            <Header title="Projects"/>
            <div className="flex justify-center">
                <ProjectTile 
                    header="Pac-Man" 
                    body="A Pac-Man clone written in GDScript using the Godot game engine." 
                    image_path="/pacman2.png" 
                    project_link="https://github.com/aidan-kelly/Pac-Man-Clone"
                />
                <ProjectTile 
                    header="Pac-Man" 
                    body="A Pac-Man clone written in GDScript using the Godot game engine." 
                    image_path="/pacman2.png" 
                    project_link="https://github.com/aidan-kelly/Pac-Man-Clone"
                />
                <ProjectTile 
                    header="Pac-Man" 
                    body="A Pac-Man clone written in GDScript using the Godot game engine." 
                    image_path="/pacman2.png" 
                    project_link="https://github.com/aidan-kelly/Pac-Man-Clone"
                />
            </div>
            
        </div>
    );
}