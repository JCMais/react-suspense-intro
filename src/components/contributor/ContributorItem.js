import React, { Suspense } from 'react';

import { createResourceFetcher } from '../../cache';
import { LoadingSpinnerImage } from '../LoadingSpinner';

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
      <Suspense fallback={<LoadingSpinnerImage className="small" />}>
        <ContributorAvatar
          className="contributor-image"
          alt=""
          src={contributor.avatar_url}
        />
      </Suspense>
      <span className="contributor-login">{contributor.login}</span>
    </li>
  );
}
