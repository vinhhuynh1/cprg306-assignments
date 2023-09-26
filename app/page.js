import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main class="font-mono text-sm">
      <h1 class="text-4xl text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <div class="text-center"> 
        <Link class="hover:text-cyan-400 hover:underline" href="week2">Week 2</Link>
      </div>
    </main>
  )
}