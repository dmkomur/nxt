import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import AddCompanyButton from '../../components/add-company-button';
import SearchInput from '../../components/search-input';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';
import CompanyTable from '../../components/company-table';
export default function Companies() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Cosco'}
          status={Status.PENDING}
          promotion={true}
          country={'Ukraine'}
          joinedDate={'15.11.1986'}
        />
      </CompanyTable>
    </>
  );
}
