import NavBar from "./components/NavBar/NavBar";

export default function Blog()
{
    document.title = 'Blog';
    return (
        <div className="font-mono">
            <NavBar title='Blog'/>
            <h1>BLOG</h1>
        </div>
    );
}