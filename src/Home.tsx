import NavBar from "./components/NavBar/NavBar";

export default function Home()
{
    document.title = 'Aidan Kelly';
    return (
        <div className='font-mono'>
            <NavBar title='Home'/>
            <h1>Hi, I'm Aidan Kelly.</h1>
            <h2>I develop.</h2>
        </div>
    );
}