import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between items-center
         bg-sky-700 px-8 py-3 rounded-lg">
            <Link className="text-white font-bold" href={"/"}>Johnny's List</Link>
            <Link className=" bg-sky-200 p-2 rounded-lg" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}