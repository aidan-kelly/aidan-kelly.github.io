interface HeaderProps
{
    title: string;
}

export default function Header({title}:HeaderProps)
{
    return (
        <h1 className="text-emerald-400 p-4 text-left">{title}</h1>
    );
}