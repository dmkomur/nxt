import React from 'react';
import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <h1>Company not found</h1>
      <Link href="/companies" className="color-blue-500">
        Back to companies
      </Link>
    </>
  );
}
