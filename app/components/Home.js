import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Body, Text } from 'native-base';

class Home extends Component {
	render() {
		return (
			<Container>
				<Text>Hello</Text>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Home);
