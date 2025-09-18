import React from 'react';
import Header from '../../../components/header';

interface CompanyParams {
  id: string[];
}

export default async function Company({
  params,
}: {
  params: Promise<CompanyParams>;
}) {
  const { id } = await params; // теперь всё ок
  return (
    <>
      <Header>Company {id.join('/')}</Header>
    </>
  );
}
