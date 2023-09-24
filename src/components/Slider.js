import { CheckBox, Divider } from '@rneui/base';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { siteData } from '../api/helper';

const mystyles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

const Slider = () => {
	const window = Dimensions.get('window');
	const [isSelected, setSelection] = useState(true);
	return (
		<View style={styles.container}>
			<SlidingUpPanel
				draggableRange={{ top: window.height * 0.7, bottom: 0 }}
				allowDragging={true}
				backdropOpacity={0}
				ref={(c) => (this._panel = c)}
				showBackdrop={true}
			>
				<View style={styles.container}>
					<Text style={{ textAlign: 'center' }}>Site Details</Text>
					<View style={styles.checksContainer}>
						{siteData.map((site) => (
							<>
								<CheckBox
									checked={isSelected}
									onPress={() => setSelection(!isSelected)}
									title={site.heading}
								/>
								<Divider />
							</>
						))}
					</View>
					<View style={styles.btnContainer}>
						<Button
							buttonStyle={styles.btn}
							titleStyle={{ fontWeight: '800' }}
							title="CANCEL"
							type="outline"
							onPress={() => this._panel.hide()}
						/>
						<Button
							buttonStyle={styles.btn2}
							titleStyle={{ fontWeight: '800' }}
							title="CONFIRM"
						/>
					</View>
				</View>
			</SlidingUpPanel>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'start',
		justifyContent: 'start',
		borderRadius: 30,
		paddingVertical: 20,
		paddingHorizontal: 10,
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
	checksContainer: {
		marginBottom: 20,
	},
});

export default Slider;
