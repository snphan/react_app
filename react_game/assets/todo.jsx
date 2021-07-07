import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
  render() {
    return (
      <div>This is some content that React Rendered!</div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);