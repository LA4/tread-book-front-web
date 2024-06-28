

type HeaderProps = {
    username: string,
    pages: string
}


export default function UserHeader({ username = "username", pages = "1200" }: HeaderProps) {
    return (
        <header className="flex justify-between px-6 py-4 bg-olive-dark text-beige-light items-center fixed top-0 w-full ">
            <span className="flex rounded-full w-[50px] h-[50px] border-2"></span>
            <span>{username}</span>
            <div className=" flex flex-col items-center">
                <span className="text-orange font-bold text-lg">{pages}</span>
                <span className="text-sm font-bold">Pages</span>

            </div>
        </header>
    )
}
