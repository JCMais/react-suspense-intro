import React from 'react';

import { ContributorItem } from './ContributorItem';

export function ContributorList(props) {
  const { data } = props;
  return (
    <ul className="contributor-list">
      {data.map(contributor => {
        return (
          <ContributorItem key={contributor.id} contributor={contributor} />
        );
      })}
    </ul>
  );
}
