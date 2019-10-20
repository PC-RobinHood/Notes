import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import AllNotes from "../Notes/AllNotes"
import NewNote from "../Notes/NewNote"
import EditNote from "../Notes/EditNote"
import "../../assets/css/app.css"

function App() {
  return (
    <Router>
      <div>
        <nav
          className="navbar App-header"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Notes App
            </Link>
          </div>

          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              All Notes
            </Link>

            <Link to="/newnote" className="navbar-item">
              New Note
            </Link>
          </div>
        </nav>

        <Route exact path="/" component={AllNotes} />
        <Route path="/newnote" component={NewNote} />
        <Route path="/note/:id" component={EditNote} />
      </div>
    </Router>
  )
}

export default App