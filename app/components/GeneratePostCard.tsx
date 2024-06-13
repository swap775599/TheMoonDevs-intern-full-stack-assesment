"use client"
import { generatePost } from "@/lib/actions";
import { useState } from "react";

type Props = {}

export default function GeneratePostCard({ }: Props) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) return;
    setIsLoading(true);
    const response = await generatePost(prompt);
    setPrompt("")
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md text-black">
      <input
        type="text"
        value={prompt}
        onChange={handleChange}
        placeholder="Enter your prompt"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        {isLoading ? "Generating..." : "Generate a Post"}
      </button>
    </div>
  )
}
