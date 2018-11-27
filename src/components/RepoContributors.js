import React from 'react';

import { contributorsFetcher } from '../api/fetchers';

import { ContributorList } from './contributor/ContributorList';

function ContributorListSuspense(props) {
  const data = contributorsFetcher.read(props.fullRepoName);

  return <ContributorList data={data} />;
}

export function RepoContributors(props) {
  return <ContributorListSuspense fullRepoName={props.fullRepoName} />;
}
