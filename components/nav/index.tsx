'use client';

import WithUserInfoNav from 'components/nav/WithUserInfoNav';
import { Suspense } from 'react';

const Nav: React.FC = () => {
  return (
    <nav
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
      className="fixed top-0 z-30 flex w-full max-w-3xl flex-col gap-6 bg-white px-5 pb-6"
    >
      <div className="flex w-full items-center justify-between">
        <Suspense fallback={<div>로딩이 돌아간다.</div>}>
          <WithUserInfoNav />
        </Suspense>
      </div>
    </nav>
  );
};

export default Nav;
