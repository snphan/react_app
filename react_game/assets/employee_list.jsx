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
  };

  handleClick() {
    const {clickCount} = this.state
    console.log(clickCount)
    this.state.clickCount = clickCount + 1;
    alert(`I was clicked ${clickCount} times!`)
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          {this.state.clickCount}
          <Button color="primary" onClick={this.handleClick}>Click Me!</Button>
          
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