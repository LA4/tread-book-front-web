'use client'

const getHeightOfScreen = window.innerHeight

export default function UserFooter() {


    return (
        <footer className="flex h-[70px] bg-white justify-between px-8 items-center fixed bottom-0 w-full z-40"
        >
            <div>
                home
            </div>
            <div>
                addBook
            </div>
            <div>
                actuel read
            </div>

        </footer>
    )
}
