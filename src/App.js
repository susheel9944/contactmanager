import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//import Contact from './components/Contact';
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
//import AddContact from './components/contacts/AddContact_ref';
import About from "./components/Pages/About";
import AddContact from "./components/contacts/addContact";
import { Provider } from "./Context";
import NotFound from "./components/Pages/NotFound";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <Router>
            <div className="container">
              <Header branding="Contact Manager" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/about/:id" component={About} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/edit/:id" component={EditContact} />
                  <Route exact path="/Test" component={Text} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
      </>
    );
  }
}
export default App;
