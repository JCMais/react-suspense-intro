import React from 'react';

import * as githubApi from '../api/api';

import { RepoContributors } from './RepoContributors';
import { LoadingSpinner } from './LoadingSpinner';
import { RepoList } from './repo/RepoList';

export class OrgRepos extends React.Component {
  state = {
    isLoading: true,
    isShowingRepoContributors: null,
    data: []
  };

  componentDidMount() {
    this.fetchDataAndUpdate(this.props.orgName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.orgName !== nextProps.orgName) {
      this.setState({
        isLoading: true,
        isShowingRepoContributors: null,
        data: []
      });
      this.fetchDataAndUpdate(nextProps.orgName);
    }
  }

  async fetchDataAndUpdate(orgName) {
    const data = await githubApi.getOrgRepos(orgName);

    this.setState({
      isLoading: false,
      data
    });
  }

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
    const { data, isShowingRepoContributors } = this.state;

    return isShowingRepoContributors ? (
      <div>
        <button onClick={this.onBack}>Back</button>
        <br />
        <RepoContributors fullRepoName={isShowingRepoContributors} />
      </div>
    ) : (
      <RepoList onRepoClick={this.onRepoClick} repos={data} />
    );
  }

  render() {
    const { isLoading } = this.state;

    return isLoading ? <LoadingSpinner /> : this.renderContent();
  }
}
