import NavBar from "./components/NavBar/NavBar";

export default function Home()
{
    document.title = 'Aidan Kelly';
    return (
        <div className="font-mono bg-[url('/background-2048x1536.png')] h-screen">
            
            <NavBar title='Home'/>
            <div className="flex flex-col justify-items-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
            
                <h1 className="text-center">Hi, I'm Aidan Kelly.</h1>
                <h2 className="text-center">A software developer from Calgary, Alberta, Canada</h2>
            </div>
        </div>
    );
}