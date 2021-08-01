import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLastFM } from '../.';

const App = () => {
  const lastFM = useLastFM('mehf', '9d93c9ed1ec5d370bed6a768664de7c5');

  if (lastFM.status === 'error') {
    return <p>Could not connect to Last.fm</p>;
  }

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>;
  }

  return (
    <p>
      Listening to {lastFM.song.name} by {lastFM.song.artist}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
