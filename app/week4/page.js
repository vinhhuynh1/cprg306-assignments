import NewItem from './new-item.js';
import Link from "next/link"

function Week4() {
    return (
        <main class="font-mono h-screen bg-sky-200 text-blue-900">

            <NewItem />  

            <div class="hover:text-cyan-500 hover:underline text-center text-lg flex items-center ">  
                <Link href="../">&lt;- Back</Link>
            </div>

        </main>
    )
}

export default Week4;