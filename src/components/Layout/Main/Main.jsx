import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LoanRequestsContainer from "../../../containers/LoanRequests";
import RequestLoanFormContainer from "../../../containers/RequestLoanForm";

import "./Main.css";

class Main extends Component {
    render() {
        return (
            <main className="Main">
                <Switch>
                    <Route exact path="/" component={LoanRequestsContainer} />
                    <Route path="/create" component={RequestLoanFormContainer} />
                </Switch>
            </main>
        );
    }
}

export default Main;
