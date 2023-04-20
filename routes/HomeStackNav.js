import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';


const screens = {Home: {
    screen : Home
}}

const StackNav = createNativeStackNavigator(screens)

export default function createAppContainer(StackNav);
