interface ProjectTileProps
{
    header: string,
    body: string,
    image_path: string,
    project_link: string
}

export default function ProjectTile(projectTileProps: ProjectTileProps)
{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-700">
            <img className="w-full" src={projectTileProps.image_path}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex justify-between">
                    {projectTileProps.header}
                    <a href={projectTileProps.project_link} target="_blank">
                        <img src="/github-mark-white.png" className="min-h-7 max-h-7 "/>
                    </a>
                </div>
                <p className="text-white text-base">
                {projectTileProps.body}
                </p>
            </div>
        </div>
    );
}