import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'

class App extends Component {
	render() {
		return (
			<Layout>
				<div style={{border: '1px solid black', width: '400px', height: '100px'}}>
					Lorem ipsum dolor sit amet.
				</div>
			</Layout>
		);
	}
}

export default App;
