import Link from "next/link"
import ItemList from "./item-list"

export default function Week3() {
    return (
        <main class="font-mono text-sm bg-sky-200 text-blue-900">

            <h1 class="text-4xl font-bold">Shopping List</h1>
            
            <ItemList />

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold">
                <Link href="../">&lt;- Home</Link>
            </div>

        </main>
    )
}