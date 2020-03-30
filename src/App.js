import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home';

const PUBLIC_URL = process.env.PUBLIC_URL;

class App extends React.Component {
	render() {
		return (
			<BrowserRouter basename={PUBLIC_URL}>
				<Switch>
					<Route path="/" exact component={Home}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
