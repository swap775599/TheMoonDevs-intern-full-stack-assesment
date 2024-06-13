import axios from "axios";
import PostList from "./components/posts/PostList";

const googleSheetAPIURL = "https://sheetdb.io/api/v1/b7tslqs6bhxe4"

export default async function Home() {
  const posts = await axios.get(googleSheetAPIURL)
  return (
    <div className="p-4 h-screen mt-[56px] w-screen bg-white flex items-center justify-center overflow-hidden">
      <PostList posts={posts.data} />
    </div>
  );
}
