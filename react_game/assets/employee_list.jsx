import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';


const DUMMY_EMPLOYEES = [
  {
    id: 1, 
    created_by: 1,
    name: 'Johnny Bob',
    department: 'hr',
    salary: '400000',
  },
  {
    id: 2, 
    created_by: 1,
    name: 'Winster Bob',
    department: 'finance',
    salary: '100000',
  },
  {
    id: 3, 
    created_by: 1,
    name: 'Apple Bob',
    department: 'marketing',
    salary: '30000',
  },
  {
    id: 4, 
    created_by: 1,
    name: 'Tyler Bob',
    department: 'engineering',
    salary: '20000',
  },
]


class SearchableEmployeeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  // You need to use arrow functions....
  handleClick() {
    const { clickCount } = this.state;
    this.setState({clickCount: clickCount+1});
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button color="primary" onClick={() => this.handleClick()}>Click Me!</Button>
          <br />
          Clicked {this.state.clickCount} Times!
        </div>
      </div>
    );
  }
}

//==================================================//

ReactDOM.render(
  <SearchableEmployeeList />,
  document.getElementById('root')
)