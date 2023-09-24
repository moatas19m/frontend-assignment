import { Button } from '@rneui/themed';
import React from 'react';
import {
	Button as ButtonReact,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { cardData, recentsBtnData } from '../../api/helper';
import Card from '../Card';
import SearchBox from '../SearchBox';

const Recents = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<SearchBox />
			<View style={styles.btnContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{recentsBtnData.map((btn) => (
						<Button
							key={btn.id}
							buttonStyle={styles.buttonStyle}
							title={btn.title}
							titleStyle={styles.titleStyle}
						/>
					))}
				</ScrollView>
			</View>
			<View style={styles.cardContainer}>
				{cardData.map((card) => (
					<Card
						key={card.id}
						heading={card.heading}
						subHeading={card.subHeading}
						image={card.image}
						background={card.background}
						favColor={card.favColor}
					/>
				))}
			</View>
			<View style={{ marginVertical: 20 }}>
				<ButtonReact color={'#0B5E86'} title="Publish" />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	},
	btnContainer: {
		flexDirection: 'row',
		marginVertical: 20,
	},
	buttonStyle: {
		backgroundColor: '#fff',
		borderColor: '#323F4B',
		marginEnd: 15,
	},
	titleStyle: {
		color: '#323F4B',
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		rowGap: 4,
		flexBasis: 200,
		flexShrink: 1,
		flexGrow: 0,
		flexWrap: 'wrap',
	},
});

export default Recents;
