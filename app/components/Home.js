import React, { Component } from 'react';
import { View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Text, Title, Card, CardItem } from 'native-base';
import HTML from 'react-native-render-html';

export default class Home extends Component {
	state = {
		data: [],
		isLoading: true
	};

	static navigationOptions = {
		title: 'Shows'
	};

	componentDidMount() {
		fetch('http://api.tvmaze.com/shows')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ data: data, isLoading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		console.log(this.props.data);

		const { data } = this.state;

		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		} else {
			return (
				<Container>
					<Content>
						{data.map((i) => {
							return (
								<Card key={i.id}>
									<CardItem
										button
										header
										onPress={() => {
											this.props.navigation.navigate('Show', {
												title: i.name,
												show: i
											});
										}}
									>
										<Text>{i.name}</Text>
									</CardItem>
									<CardItem>
										<Image
											source={{ uri: i.image.medium }}
											style={{
												flex: 1,
												resizeMode: 'contain',
												width: Dimensions.get('window').width,
												height: 300
											}}
										/>
									</CardItem>
									<CardItem>
										<Body>
											<HTML html={i.summary} imagesMaxWidth={Dimensions.get('window').width} />
										</Body>
									</CardItem>
								</Card>
							);
						})}
					</Content>
				</Container>
			);
		}
	}
}
