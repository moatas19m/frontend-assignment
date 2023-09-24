import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import { Icon } from '@rneui/base';

const DropDown = () => {
	const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
	return (
		<SelectDropdown
			data={countries}
			defaultButtonText="All"
			dropdownIconPosition="right"
			buttonStyle={{
				width: 'auto',
				backgroundColor: '#fff',
				borderColor: '#E3E7EB',
				borderWidth: 2,
				marginVertical: 8,
			}}
			disabled
			buttonTextStyle={{ color: '#6C7782' }}
			renderDropdownIcon={() => (
				<Icon name="chevron-down-outline" type="ionicon" />
			)}
			onSelect={(selectedItem, index) => {
				console.log(selectedItem, index);
			}}
			buttonTextAfterSelection={(selectedItem, index) => {
				// text represented after item is selected
				// if data array is an array of objects then return selectedItem.property to render after item is selected
				return selectedItem;
			}}
			rowTextForSelection={(item, index) => {
				// text represented for each item in dropdown
				// if data array is an array of objects then return item.property to represent item in dropdown
				return item;
			}}
		/>
	);
};

export default DropDown;
