import React from 'react';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import { version } from '../package.json';

const nodeEnv = process.env.NODE_ENV;
const gitBranch = process.env.REACT_APP_GIT_BRANCH;
const gitCommitHash = process.env.REACT_APP_GIT_COMMIT;

const App = () => (
  <Container text>
    <Header as="h1">Enterprise React Components</Header>
    <ul>
      <li>Version: {version}</li>
      <li>Node Environment: {nodeEnv} </li>
      <li>Git Branch: {gitBranch}</li>
      <li>Git Commit Hash#: {gitCommitHash}</li>
    </ul>
  </Container>
);

export default App;
