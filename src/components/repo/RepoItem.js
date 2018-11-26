import React from 'react';

export function RepoItem(props) {
  const { onClick, repo } = props;

  return <li onClick={() => onClick(repo.full_name)}>{repo.name}</li>;
}
