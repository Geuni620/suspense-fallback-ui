'use client';

import UsequeryComp from 'app/components/UsequeryComp';
import { Suspense } from 'react';

// const UsequeryComp = dynamic(() => import('./components/UsequeryComp'), {});

export default function Home() {
  return (
    <>
      {/* <div className="flex items-center justify-center bg-red-500">
        <UseEffectComp />
      </div> */}

      <Suspense fallback={<div>useQuery loading...</div>}>
        <div className="flex items-center justify-center bg-blue-500">
          <UsequeryComp />
        </div>
      </Suspense>
    </>
  );
}
