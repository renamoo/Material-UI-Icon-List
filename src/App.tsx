import * as uiIcons from '@material-ui/icons';
import React, { Suspense, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';

const Content = React.lazy(() => import('./components/Content'));

const App: React.FC = () => {
  const [select, setSelect] = useState('');
  const names = Object.keys(uiIcons);

  return (
    <div className="App">
      <Header setSelect={setSelect}></Header>
      <Suspense fallback={<Loading></Loading>}>
        <Content select={select} setSelect={setSelect}></Content>
      </Suspense>
    </div>
  );
}

export default App;
