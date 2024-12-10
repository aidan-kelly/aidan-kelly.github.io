import NavBar from "./components/NavBar/NavBar";


export default function AboutMe()
{
    document.title = 'About Me';

    return (
        <div className="font-mono">
            <NavBar title='About Me'/>
                <div className="article">
                <h1>About Me</h1>
                
                <p>
                    I am a Software Developer with four years of experience, currently working at SeisWare. My
                    interests include computer security and video game development. Please take a look around this 
                    site which shows off a few of my projects! 
                </p>

                <p>
                    Outside of work I enjoy playing table-top role-playing games (think Dungeons and Dragons),
                    reading fiction, and playing videos games. 
                </p>

                <hr/>
                
                <h2>Contact Information and Links</h2>
                <div className='contactInfo'>
                    <ul>
                        <li><a href="tel:+1-403-464-4043" target="_blank">403-464-4043</a></li>
                        <li><a href="https://github.com/aidan-kelly" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/aidan-james-kelly/" target="_blank">LinkedIn</a></li>
                        <li><a href="mailto: contact@aidankelly.dev" target="_blank">contact@aidankelly.dev</a></li>
                        
                    </ul>
                </div>
                

            </div>
        </div>
    );
    
}