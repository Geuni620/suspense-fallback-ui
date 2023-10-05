import { Suspense } from 'react';

import UseServerComp from '../components/server/UseServerComp';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>...server loading</div>}>
        <div className="flex items-center justify-center bg-yellow-400">
          <UseServerComp />
        </div>
      </Suspense>
    </>
  );
}
