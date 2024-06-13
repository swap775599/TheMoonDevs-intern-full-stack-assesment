import React from 'react'

type Props = {
  post: string;
}

export default function PostItem({ post }: Props) {
  return (
    <div className='p-2 bg-white shadow-lg text-black w-[300px] h-fit'>
      {post}
    </div>
  )
}
