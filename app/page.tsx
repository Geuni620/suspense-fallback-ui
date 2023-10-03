'use client';

import UseEffectComp from 'app/components/UseEffectComp';
import UsequeryComp from 'app/components/UsequeryComp';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// const UsequeryComp = dynamic(() => import('./components/UsequeryComp'), {});

export default function Home() {
  return (
    <>
      {/* <div className="flex items-center justify-center bg-red-500">
        <UseEffectComp />
      </div> */}

      <Suspense fallback={<div>useQuery 로딩이 돈다.</div>}>
        <div className="flex items-center justify-center bg-blue-500">
          <UsequeryComp />
        </div>
      </Suspense>
    </>
  );
}
