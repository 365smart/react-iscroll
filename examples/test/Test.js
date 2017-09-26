'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import iscroll from 'iscroll';
import iscroll from 'iscroll/build/iscroll-probe';
// import ReactIScroll from 'src/ReactIScroll';
import ReactIScroll from 'dist/react-iscroll';

class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.refs.iscroll) {
      this.refs.iscroll.updateIScroll()
    }
  }

  render() {

    const scrollOptions = {
      mouseWheel: true,
      probeType: 2,
      click: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: false,
      tap: true
    };

    let generateItems = [];
    for (let i = 0; i < 100; i++) {
      generateItems.push(i);
    }

    let listItems = [];
    generateItems.map((elem, index) => {
      const isOdd = Math.abs(index % 2) === 1;
      const listItem = <div key={index} style={{padding: '1em 3em', textAlign: 'center', background: isOdd ? '#eee' : '#f1f1d9', fontFamily: 'monospace', fontSize: '1.5em'}}>List item {index}</div>;
      listItems.push(listItem);
    });

    return (
      <div>
        <ReactIScroll iScroll={iscroll} options={scrollOptions} ref='iscroll'>
          {listItems}
        </ReactIScroll>
      </div>
    );
  }
}

const app = document.getElementById('root');
ReactDOM.render(<Test/>, app);
