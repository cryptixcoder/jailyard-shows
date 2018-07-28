import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainNavigation from './app/components/Navigation';

console.disableYellowBox = true;
export default class App extends Component {
	render() {
		return <MainNavigation />;
	}
}
