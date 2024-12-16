import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Blog()
{
    document.title = 'Blog';
    return (
        <div className="font-mono">
            <NavBar title='Blog'/>
            <Header title="Blog"/>
        </div>
    );
}