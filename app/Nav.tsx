'use client';

import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="flex gap-2">
      <Link href="/">home</Link>
      <Link href="/path">path</Link>
      <Link href="/server">server</Link>
    </div>
  );
};

export default Nav;
