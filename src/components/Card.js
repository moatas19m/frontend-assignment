import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import img1 from '../assets/img1.png';

const Card = ({ heading, subHeading, image, background, favColor }) => {
	const [fav, setFav] = useState(true);
	const favHandler = () => {
		setFav(!fav);
	};
	return (
		<View style={styles.card} backgroundColor={`${background}`}>
			<View style={styles.cardHeader}>
				<Image style={styles.img} source={image} />
				<TouchableOpacity onPress={favHandler}>
					<Icon
						type="ionicon"
						name={fav ? 'heart' : 'heart-outline'}
						iconStyle={styles.iconStyle}
						color={`${favColor}`}
						size={16}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.cardBody}>
				<Text style={styles.heading}>{heading}</Text>
				<Text style={styles.subHeading}>{subHeading}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		marginHorizontal: 5,
		marginVertical: 5,
		paddingVertical: 20,
		width: '46%',
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	img: {
		marginHorizontal: 15,
		marginBottom: 20,
	},
	cardBody: {
		marginHorizontal: 15,
	},
	iconStyle: {
		marginHorizontal: 15,
	},
	heading: {
		fontSize: 11,
		textTransform: 'uppercase',
		color: '#323F4B',
		marginBottom: 5,
	},
	subHeading: {
		fontSize: 16,
		textTransform: 'capitalize',
		color: '#323F4B',
		marginBottom: 10,
		fontWeight: '500',
	},
});

export default Card;
