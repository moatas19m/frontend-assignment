import { SearchBar } from '@rneui/themed';
import React, { useState } from 'react';

const SearchBox = () => {
	const [search, setSearch] = useState('');

	const updateSearch = (search) => {
		setSearch(search);
	};

	return (
		<SearchBar
			placeholder="Search"
			onChangeText={updateSearch}
			value={search}
			lightTheme
			inputContainerStyle={{
				backgroundColor: '#fff',
				borderRadius: 10,
			}}
			containerStyle={{
				backgroundColor: '#fff',
				borderRadius: 10,
				padding: 0,
			}}
			inputStyle={{ color: '#000' }}
			searchIcon={{ size: 30 }}
		/>
	);
};
export default SearchBox;
