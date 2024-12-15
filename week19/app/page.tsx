import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="text-lg w-screen h-screen bg-black flex justify-center items-center">
    Todo Application 
    <Link href={'/signup'}> sign up</Link>
    <Link href={'/signin'}> sign in</Link>
  </div>
}
