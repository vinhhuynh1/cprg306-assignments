import Link from "next/link"
import StudentInfo from "../StudentInfo"

export default function Week2() {
    return (
        <main class="font-mono text-sm h-screen bg-sky-200 text-blue-900">

            <h1 class="text-4xl text-center font-bold">My Shopping List</h1>

            <StudentInfo />

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold">
                <Link href="../">&lt;- Home</Link>
            </div>
            
        </main>    
    )
}