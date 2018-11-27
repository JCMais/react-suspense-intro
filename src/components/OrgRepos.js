import React, { Suspense } from 'react';

import { reposFetcher } from '../api/fetchers';

import { RepoContributors } from './RepoContributors';
import { LoadingSpinner } from './LoadingSpinner';
import { RepoList } from './repo/RepoList';

function RepoListSuspense(props) {
  const data = reposFetcher.read(props.orgName);
  return <RepoList repos={data} onRepoClick={props.onRepoClick} />;
}

export class OrgRepos extends React.Component {
  state = {
    isShowingRepoContributors: null
  };

  onRepoClick = fullRepoName => {
    this.setState({
      isShowingRepoContributors: fullRepoName
    });
  };

  onBack = () => {
    this.setState({
      isShowingRepoContributors: null
    });
  };

  renderContent() {
    const { isShowingRepoContributors } = this.state;

    return isShowingRepoContributors ? (
      <div>
        <button onClick={this.onBack}>Back</button>
        <br />
        <RepoContributors fullRepoName={isShowingRepoContributors} />
      </div>
    ) : (
      <RepoListSuspense
        orgName={this.props.orgName}
        onRepoClick={this.onRepoClick}
      />
    );
  }

  render() {
    return (
      <Suspense fallback={<LoadingSpinner />}>{this.renderContent()}</Suspense>
    );
  }
}
