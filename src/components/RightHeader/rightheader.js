import { Icon } from '@rneui/base';
import { Image, StyleSheet, View } from 'react-native';

const RightHeader = (props) => {
	return (
		<View style={styles.iconContainer}>
			<Icon type="ionicon" name={'ellipsis-vertical'} />
			<Icon name="create-outline" type="ionicon" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon: {
		paddingLeft: 10,
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: 120,
	},
});

export default RightHeader;
