

export default function Header({title}:{title : string}) {
    return (
        <div>{title ? title : "Default title"}</div>
       

    )

    
}