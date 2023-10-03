import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main class="font-mono text-sm h-screen bg-sky-200 text-blue-900">

      <h1 class="text-4xl text-center font-bold">CPRG 306: Web Development 2 - Assignments</h1>

      <StudentInfo />

      <div class="text-center"> 
        <ul><Link class="hover:text-cyan-500 hover:underline" href="week2">Week 2</Link></ul>
        <ul><Link class="hover:text-cyan-500 hover:underline" href="week3">Week 3</Link></ul>
      </div>

    </main>
  )
}