import React from 'react'
import PostItem from './PostItem';

type Props = {
  posts: {
    id: string;
    prompt: string;
    post: string;
    timestamp: string;
  }[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className='h-full w-full flex flex-wrap gap-4 p-2 overflow-auto'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post.post} />
      ))}
    </div>
  )
}
