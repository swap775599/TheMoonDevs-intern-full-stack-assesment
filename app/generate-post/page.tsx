import Link from "next/link";
import GeneratePostCard from "../components/GeneratePostCard"

type Props = {}

export default function Page({ }: Props) {
  return (
    <>
      <div className="fixed top-4 left-5">
        <Link href={"/"} className="bg-blue-600 rounded-md p-2">
          {"<- Go Back"}
        </Link>
      </div>
      <div className="h-[calc(100vh-56px)] mt-[56px] w-screen bg-white flex items-center justify-center">
        <GeneratePostCard />
      </div>
    </>
  );
}
