import React from 'react';

import * as githubApi from '../api/api';

import { LoadingSpinner } from './LoadingSpinner';

import { ContributorList } from './contributor/ContributorList';

export class RepoContributors extends React.Component {
  state = {
    isLoading: true,
    data: []
  };

  async componentDidMount() {
    const data = await githubApi.getRepoContributors(this.props.fullRepoName);

    this.setState({
      isLoading: false,
      data
    });
  }

  render() {
    const { data, isLoading } = this.state;
    return isLoading ? <LoadingSpinner /> : <ContributorList data={data} />;
  }
}
