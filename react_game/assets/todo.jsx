import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Modal from "./components/Modal";

axios.defaults.xsrfHeaderName = "X-CSRFToken"; // So that post requests don't get rejected

// Dummy Data
// const todoItems = [
//   {
//     id: 1,
//     title: "Go to Market",
//     description: "Buy ingredients to prepare dinner",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Sutdy",
//     description: "Read Algebra and history textbook for the upcoming test",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Sammy's books",
//     description: "Go to library to return Sammy's books",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Article",
//     description: "Write article on how to use Django with React",
//     completed: false,
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: JSON.parse(document.getElementById('user_id').text),
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed:false,
        created_by: JSON.parse(document.getElementById('user_id').text),
      },
    };
  }

  componentDidMount() {
    // Runs this after the html is inserted into the tree, initialization should be 
    // Put here.
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/todos/")
      .then((res) => {
        let filteredData = res.data.filter(item => item.created_by == this.state.currentUser);
        this.setState({ todoList: filteredData })
      })
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal});
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/todos/", item)
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/todos/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false, created_by: this.state.currentUser };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  
  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false});
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
              onClick={() => this.displayCompleted(true)}>
            Complete
        </span>
        <span className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
              onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const {currentUser, viewCompleted} = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted
    );
    return newItems.map((item) => (
      <li key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span className={`todo-title me-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.description}>
            {item.title}
          </span>
          <span>
            <button className="btn btn-secondary me-2"
                    onClick={() => this.editItem(item)}>
              Edit
            </button>
            <button className="btn btn-danger"
                    onClick={() => this.handleDelete(item)}>
              Delete 
            </button>
          </span>
      </li>
    ));
  };
  
  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary mb-2"
                        onClick={this.createItem}>
                  Add task
                </button>
                {this.renderTabList()}
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul> 
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}




//================================================== 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);