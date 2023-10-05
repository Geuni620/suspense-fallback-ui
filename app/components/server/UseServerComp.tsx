import { Post } from '@/type';

import { serverPostQuery } from '../../api/route';

const UseServerComp: React.FC = async () => {
  const posts = await serverPostQuery();

  return (
    <>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default UseServerComp;
