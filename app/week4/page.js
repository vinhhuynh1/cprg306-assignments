import NewItem from './new-item.js';
import Link from "next/link"

function Week4() {
    return (
        <main class="font-mono text-sm h-screen bg-sky-200 text-blue-900 flex justify-center w-full">
            <NewItem />

            <div class="hover:text-cyan-500 hover:underline text-center text-lg">
                <Link href="../">&lt;- Back</Link>
            </div>

        </main>
    )
}

export default Week4;