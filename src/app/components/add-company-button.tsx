'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Button } from './button'; // import CompanyFormModal from './company-form-modal';
const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});
export default function AddCompanyButton({}) {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
