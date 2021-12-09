import React, { Component } from 'react';

class Subject extends Component {
  // 반드시 필요한 부분 class 소속 함수에서는 function을 생략
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
