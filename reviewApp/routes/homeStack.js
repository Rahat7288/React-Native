import { createNativeStackNavigator } from "react-navigation-stack/native-stack";
import { NavigationContainer } from "react-navigation/native";
import Home from '../screens/home';
import ReviewDetails from "../screens/reviewDetails";

const screens = {
    Home : {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createNativeStackNavigator(screens);

export default NavigationContainer(HomeStack);