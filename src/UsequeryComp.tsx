'use client';

import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const fetchPosts = async () => {
  // 3초 대기
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log('서버가 동작했다~!');
  const data = await response.json();
  return data;
};

const UsequeryComp = () => {
  const { data: posts = [] } = useQuery(['posts'], fetchPosts, {
    suspense: true,
  });

  return (
    <ul style={{ backgroundColor: 'red' }}>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default UsequeryComp;
