import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoCard = ({ title, date, progress }) => {
	return (
		<View style={styles.detailContainer}>
			<View>
				<Text style={styles.heading}>{title}</Text>
				<View style={{ flexDirection: 'row', gap: 5 }}>
					<Text style={{ color: '#6C7782', fontSize: 12 }}>Last Updated:</Text>
					<Text style={{ color: '#323F4B', fontSize: 12 }}>{date}</Text>
				</View>
				{progress && (
					<View style={styles.progress}>
						<Text style={styles.progressTitle}>in progress</Text>
					</View>
				)}
			</View>
			<TouchableOpacity>
				<Icon color={'#323F4B'} name="add-circle-outline" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flexDirection: 'column',
	},
	detailContainer: {
		borderColor: '#DFE9EE',
		borderWidth: 2,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
		padding: 10,
	},
	heading: {
		fontSize: 14,
		marginBottom: 5,
		color: '#323F4B',
	},
	progress: {
		marginTop: 10,
		backgroundColor: '#FFF0D8',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 2,
		width: '60%',
	},
	progressTitle: { color: '#DD9314', textTransform: 'uppercase', fontSize: 12 },
});

export default TodoCard;
