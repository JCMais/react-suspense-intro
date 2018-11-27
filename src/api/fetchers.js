import { createResourceFetcher } from '../cache';

import { getOrgRepos } from './api';

export const reposFetcher = createResourceFetcher(orgName =>
  getOrgRepos(orgName)
);
