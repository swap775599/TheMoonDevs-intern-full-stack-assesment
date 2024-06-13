import Link from "next/link"

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <div className="fixed top-0 bg-white h-fit w-screen p-2 flex justify-end shadow-lg">
      <Link href={"/generate-post"} className="bg-blue-600 p-2 rounded-md">Generate Post</Link>
    </div>
  )
}
