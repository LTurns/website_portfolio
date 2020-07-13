import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import CreateTask from "./components/create_task.component";
import EditTask from "./components/edit_task.component";
import SeeTasks from "./components/see_tasks.component";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-task"} className="nav-link">
                  ProjEgg
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-task"} className="nav-link">
                    Start Project
                  </Link>
                </Nav>

                {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

                <Nav>
                  <Link to={"/tasks"} className="nav-link">
                    Project List
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route path="/" exact component={CreateTask} />
                  <Route path="/create-task" exact component={CreateTask} />
                  <Route path="/task-list" exact component={SeeTasks} />
                  <Route path="/edit-task/:id" exact component={SeeTasks} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
