import { createResourceFetcher } from '../cache';

import { getOrgRepos, getRepoContributors } from './api';

export const reposFetcher = createResourceFetcher(orgName =>
  getOrgRepos(orgName)
);

export const contributorsFetcher = createResourceFetcher(fullRepoName =>
  getRepoContributors(fullRepoName)
);
