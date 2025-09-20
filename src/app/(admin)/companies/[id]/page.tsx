'use client';

import React from 'react';
import Header from '../../../components/header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

interface CompanyParams {
  params: { id: string };
}

export default function Company({ params }: CompanyParams) {
  const id = Number.parseInt(params.id);
  useEffect(() => {
    if (isNaN(id)) notFound();
  }, [id]);
  return (
    <>
      <Header>Company {params.id}</Header>
    </>
  );
}
