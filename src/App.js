import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.component";
import Login from "./components/Login.component";
import Home from "./components/Home.component";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/home" component={Home} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
