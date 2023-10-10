import Link from "next/link"
import ItemList from "./item-list"


export default function Week3() {
    return(
        <main class="font-mono text-sm bg-sky-200">

            <h1 class="text-4xl text-blue-900 font-bold">Shopping List</h1>
            
            <ItemList />

            <div class="hover:text-cyan-500 hover:underline text-blue-900 text-center text-lg">
                <Link href="../">&lt;- Back</Link>
            </div>

        </main>
    )
}