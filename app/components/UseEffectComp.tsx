import { fetchPostEffect } from 'app/api/route';
import React, { useEffect, useState } from 'react';

import { Posts } from '@/type';

const UseEffectComp = () => {
  const [posts, setPosts] = useState<Posts>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPostEffect();
      setPosts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default UseEffectComp;
