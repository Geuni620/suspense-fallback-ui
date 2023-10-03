'use client';

import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <>
      <Link href="/">home</Link>
      <Link href="/path">path</Link>
    </>
  );
};

export default Nav;
