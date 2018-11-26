import React from 'react';

export function ContributorItem(props) {
  const { contributor } = props;
  return (
    <li key={contributor.node_id}>
      <img className="contributor-image" alt="" src={contributor.avatar_url} />
      <span className="contributor-login">{contributor.login}</span>
    </li>
  );
}
