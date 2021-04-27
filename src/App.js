import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

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
