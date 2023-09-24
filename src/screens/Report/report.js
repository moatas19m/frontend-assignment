import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { todoData } from '../../api/helper';
import Iconsendicon from '../../assets/Iconsendicon.png';
import DropDown from '../../components/DropDown';
import Slider from '../../components/Slider';
import TodoCard from '../../components/TodoCard';
import VisitDetail from '../../components/VisitDetail';

const mystyles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

const Report = () => {
	const [text, onChangeText] = useState('Enter Text Here...');
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<Text style={{ color: '#323F4B', fontWeight: '400', fontSize: 13 }}>
				Visit Details
			</Text>

			<VisitDetail />

			<Text style={{ color: '#323F4B', fontWeight: '400', fontSize: 13 }}>
				Select Site Details
			</Text>
			<TouchableOpacity onPress={() => this._panel.show()}>
				<DropDown />
			</TouchableOpacity>

			<Text style={{ color: '#323F4B', fontWeight: '400', fontSize: 13 }}>
				Todo Details
			</Text>

			{todoData.map((todo) => (
				<TodoCard
					key={todo.id}
					title={todo.title}
					date={todo.date}
					progress={todo.progress}
				/>
			))}

			<Text style={{ color: '#323F4B', fontWeight: '400', fontSize: 13 }}>
				Add comment
			</Text>
			<View style={styles.commentContainer}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={text}
				/>
				<Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}>
					<Image source={Iconsendicon} />
				</Button>
			</View>

			<View style={styles.btnContainer}>
				<Button
					buttonStyle={styles.btn}
					titleStyle={{ fontWeight: '800' }}
					title="SHARE"
					type="outline"
				/>
				<Button
					buttonStyle={styles.btn2}
					titleStyle={{ fontWeight: '800' }}
					title="DOWNLOAD"
				/>
			</View>
			{/* //drop doe  */}
			<Slider />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	input: {
		marginVertical: 8,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		borderColor: '#DFE9EE',
		flexGrow: 1,
		marginEnd: 10,
	},
	commentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	buttonStyle: {
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		borderColor: '#DFE9EE',
		borderWidth: 1,
		paddingVertical: 'auto',
		margin: 0,
	},
	titleStyle: {
		color: '#323F4B',
		fontSize: 13,
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 40,
	},
	btn: {
		paddingHorizontal: 45,
		paddingVertical: 15,
		borderRadius: 10,
		borderWidth: 1,
	},
	btn2: {
		paddingHorizontal: 45,
		paddingVertical: 15,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: '#0B5E86',
	},
});

export default Report;
