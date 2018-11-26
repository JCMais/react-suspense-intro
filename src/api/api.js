import Octokit from '@octokit/rest';

import { delay } from '../utils';

import orgsFixture from './fixtures/orgs.json';
import contributorsFixture from './fixtures/contributors.json';

const api = new Octokit();

const DEFAULT_DELAY = 2000;

const IS_MOCK_ENABLED = false;

export const getOrgRepos = async org => {
  await delay(DEFAULT_DELAY);
  const { data } = IS_MOCK_ENABLED
    ? orgsFixture[org]
    : await api.repos.listForOrg({
        org
      });

  return data
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);
};

export const getRepoContributors = async fullRepoName => {
  await delay(DEFAULT_DELAY);
  const namePieces = fullRepoName.split('/', 2);
  const { data } = IS_MOCK_ENABLED
    ? contributorsFixture[`${namePieces[0]}/${namePieces[1]}`]
    : await api.repos.listContributors({
        owner: namePieces[0],
        repo: namePieces[1]
      });

  // data is already sorted
  return data.slice(0, 5);
};
