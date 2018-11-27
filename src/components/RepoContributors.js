import React, { Suspense } from 'react';

import { contributorsFetcher } from '../api/fetchers';

import { LoadingSpinner } from './LoadingSpinner';

import { ContributorList } from './contributor/ContributorList';

function ContributorListSuspense(props) {
  const data = contributorsFetcher.read(props.fullRepoName);

  return <ContributorList data={data} />;
}

export function RepoContributors(props) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContributorListSuspense fullRepoName={props.fullRepoName} />
    </Suspense>
  );
}
