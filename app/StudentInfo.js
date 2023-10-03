
import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <p>Name: Vinh Huynh</p>
            <p>Course section: CPRG 306 E</p>
            <Link class="hover:text-cyan-500 hover:underline " href="https://github.com/vinhhuynh1?tab=repositories">https://github.com/vinhhuynh1?tab=repositories</Link>   
        </main>
    )
}