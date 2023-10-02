import Link from "next/link"
import ItemList from "./item-list"


export default function Page() {
    return(
        <main class="font-mono text-sm bg-sky-100">

            <h1 class="text-4xl text-center text-blue-900 font-bold">Shopping List</h1>
            
            <ItemList />

            <div class="hover:text-slate-900 hover:underline text-blue-900 text-center text-lg">
                <Link href="../">&lt;- Back</Link>
            </div>

        </main>
    )
}