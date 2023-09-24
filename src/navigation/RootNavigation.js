import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RightHeader from '../components/RightHeader/rightheader';
import Agro from '../screens/Agro/agro';
import Home from '../screens/Home/home';
import Report from '../screens/Report/report';

const Stack = createNativeStackNavigator();

const AgroScreenOptions = {
	title: 'Hidden Agro 12/12/12',
	headerRight: () => <RightHeader />,
};

const ReportScreenOptions = {
	title: 'Visit Report',
};

const RootNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Agro" component={Agro} options={AgroScreenOptions} />
			<Stack.Screen
				name="Report"
				component={Report}
				options={ReportScreenOptions}
			/>
		</Stack.Navigator>
	);
};

export default RootNavigation;
