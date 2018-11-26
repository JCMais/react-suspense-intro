import React, { Component } from 'react';

import './App.css';

import { OrgRepos } from './components/OrgRepos';

class App extends Component {
  state = {
    org: ''
  };

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  onGetRepos = evt => {
    evt.preventDefault();
    this.setState({
      org: this.inputRef.current ? this.inputRef.current.value : ''
    });
  };

  render() {
    const { org } = this.state;

    return (
      <div className="app-wrapper">
        <h1>React Suspense - Demo</h1>
        <form onSubmit={this.onGetRepos}>
          <input ref={this.inputRef} />
          <button type="submit">Get Repos</button>
        </form>
        {!!org && <OrgRepos orgName={org} />}
      </div>
    );
  }
}

export default App;
