'use client';

import UsequeryComp from 'app/components/UsequeryComp';
// import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// const UsequeryComp = dynamic(() => import('./components/UsequeryComp'), {
//   ssr: false,
//   loading: () => <div>useQuery loading...</div>,
// });

export default function Home() {
  return (
    <>
      {/* <div className="flex items-center justify-center bg-red-500">
        <UseEffectComp />
      </div> */}

      <Suspense fallback={<div>...useQuery loading</div>}>
        <div className="flex items-center justify-center bg-blue-500">
          <UsequeryComp />
        </div>
      </Suspense>
    </>
  );
}
