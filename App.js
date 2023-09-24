import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/home';
import Agro from './screens/Agro/agro';
import Report from './screens/Report/report';
import RightHeader from "./components/RightHeader/rightheader";


const AgroScreenOptions = {
  title: "Hidden Agro 12/12/12",
  headerRight: () => <RightHeader/>,
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Agro" component={Agro} options={AgroScreenOptions}/>
        <Stack.Screen name="Report" component={Report}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
