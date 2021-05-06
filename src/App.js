import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App(props) {
	console.log(props);
	return (
		<div className="App">
			<Route path="/" component={Navigation} />

			<Switch>
				<Route path="/new" render={(props) => <Home {...props} storyType="new" />} />
				<Route path="/" render={(props) => <Home {...props} storyType="top" />} />
			</Switch>
		</div>
	);
}

export default App;
