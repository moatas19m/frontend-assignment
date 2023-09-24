import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Recents from '../components/Tabs/Recents';

const RecentsTab = () => <Recents />;

const FavoritesTab = () => <View style={{ flex: 1 }} />;

const AllTab = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
	first: RecentsTab,
	second: FavoritesTab,
	third: AllTab,
});

const TabNavigation = () => {
	const { width } = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Recent' },
		{ key: 'second', title: 'Favorites' },
		{ key: 'third', title: 'All' },
	]);

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: '#0B5E86' }}
			style={{ backgroundColor: '#ffffff' }}
			inactiveColor="#323F4B"
			activeColor="#0B5E86"
		/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderTabBar={renderTabBar}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: width }}
		/>
	);
};

export default TabNavigation;
