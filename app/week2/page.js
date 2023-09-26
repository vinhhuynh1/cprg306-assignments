import Link from "next/link"
import StudentInfo from "../StudentInfo"

export default function Week2() {
    return (
        <main class="font-mono text-sm">
            <h1 class="text-4xl text-center">My Shopping List</h1>
            <StudentInfo />
            <Link class="hover:text-cyan-400 hover:underline" href="../">&lt;- Back</Link>
        </main>    
    )
}