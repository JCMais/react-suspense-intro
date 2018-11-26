import React from 'react';

import { RepoItem } from './RepoItem';

export function RepoList(props) {
  const { onRepoClick, repos } = props;
  return (
    <ul className="repo-list">
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} onClick={onRepoClick} />
      ))}
    </ul>
  );
}
