interface HeaderProps
{
    title: string;
}

export default function Header({title}:HeaderProps)
{
    return (
        <h1 className="p-5 font-bold text-left">{title}</h1>
    );
}