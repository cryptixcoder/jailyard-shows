import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Text, Title, Card, CardItem } from 'native-base';
import HTML from 'react-native-render-html';

export default class Show extends Component {
	state = {
		show: {}
	};

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title')
		};
	};

	componentDidMount() {
		const { navigation } = this.props;
		const show = navigation.getParam('show');

		this.setState({ show });
	}
	render() {
		return (
			<Card>
				<CardItem>
					{this.state.show.image && (
						<Image
							source={{ uri: this.state.show.image.medium }}
							style={{
								flex: 1,
								resizeMode: 'contain',
								width: Dimensions.get('window').width,
								height: 300
							}}
						/>
					)}
				</CardItem>
				<CardItem>
					<Body>
						<HTML html={this.state.show.summary} imagesMaxWidth={Dimensions.get('window').width} />
					</Body>
				</CardItem>
			</Card>
		);
	}
}
