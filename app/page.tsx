import Link from "next/link";


export default function Home() {
  return (
   <section className="text-center h-screen">
      <h1 className="font-bold text-3xl mt-20">Home</h1>
      <Link className="text-gray-900 leading-7 hover:text-gray-900/70 underline" href="/create-post">Create New Book</Link>
   </section>
  )
}
