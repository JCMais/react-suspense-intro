import React from 'react';

import { createResourceFetcher } from '../../cache';

const imageFetcher = createResourceFetcher(src => {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.src = src;
  });
});

function ContributorAvatar(props) {
  return <img {...props} src={imageFetcher.read(props.src)} />;
}

export function ContributorItem(props) {
  const { contributor } = props;
  return (
    <li key={contributor.node_id}>
      <ContributorAvatar
        className="contributor-image"
        alt=""
        src={contributor.avatar_url}
      />
      <span className="contributor-login">{contributor.login}</span>
    </li>
  );
}
