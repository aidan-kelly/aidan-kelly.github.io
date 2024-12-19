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
                <div className="flex sm:flex-row flex-col justify-center m-2 gap-4">
                    <ProjectTile 
                        header="Pac-Man" 
                        body="A Pac-Man clone written in GDScript using the Godot game engine. Written as part of the 20 Game Challenge." 
                        image_path="/pacman2.png" 
                        project_link="https://github.com/aidan-kelly/Pac-Man-Clone"
                    />
                    <ProjectTile 
                    header="Mandelbrot Set" 
                    body="My implementation of the Mandelbrot Set, written in Python utilizing Numpy and Matplotlib." 
                    image_path="/mandelbrot-set2.png" 
                    project_link="https://github.com/aidan-kelly/Mandelbrot-Set"
                    />
                    <ProjectTile 
                        header="Asteroids" 
                        body="An Asteroids clone written in GDScript using the Godot game engine." 
                        image_path="/asteroids.png" 
                        project_link="https://github.com/aidan-kelly/Asteroids-Clone"
                    />
                    
                </div>
        </div>
    );
}