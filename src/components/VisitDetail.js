import { Button } from '@rneui/themed';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import location from '../assets/Iconlocationicon.png';
import ranch from '../assets/Iconranchicon.png';
import userimg from '../assets/userimg.png';

const VisitDetail = () => {
	return (
		<View style={styles.detailContainer}>
			<View style={styles.detailHeader}>
				<Image style={styles.img} source={userimg} />
				<View style={styles.detailBody}>
					<Text style={styles.heading}>Hidden..Agro..12/12/2021</Text>
					<View style={{ flexDirection: 'row', gap: 5 }}>
						<Text style={{ color: '#6C7782', fontSize: 14 }}>
							Date of Visit:
						</Text>
						<Text style={{ color: '#323F4B', fontSize: 14 }}>04 Aug, 2023</Text>
					</View>
				</View>
			</View>
			<View style={styles.detailFooter}>
				<Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}>
					<Image source={ranch} />
					Hidden Cove Ranch
				</Button>
				<Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}>
					<Image source={location} />
					Agro Acres
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: '#F5F7FA',
		marginEnd: 15,
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 40,
	},
	titleStyle: {
		color: '#323F4B',
		fontSize: 13,
	},
	detailContainer: {
		borderColor: '#DFE9EE',
		borderWidth: 2,
		borderRadius: 10,
		marginVertical: 10,
		paddingVertical: 20,
	},
	detailHeader: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginBottom: 20,
	},
	img: {
		width: 60,
		height: 60,
	},
	heading: {
		fontSize: 18,
		marginBottom: 5,
		color: '#323F4B',
	},
	detailFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});

export default VisitDetail;
