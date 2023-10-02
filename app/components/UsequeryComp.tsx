'use client';

import { useQuery } from '@tanstack/react-query';
import { axiosPostQuery } from 'app/api/route';
import React from 'react';

import { Post } from '@/type';

const UsequeryComp = () => {
  const { data: posts } = useQuery(['posts'], axiosPostQuery);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default UsequeryComp;
