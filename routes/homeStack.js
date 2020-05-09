import {createStackNavigator} from "react-navigation-stack";
import Home from '../screens/home'
import  {createAppContainer} from 'react-navigation'
import ReviewDetails from "../screens/reviewDetails";

const screens = {
   Home: {
       screen: Home,

   },
    ReviewDetails: {
       screen: ReviewDetails
    }
}
const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack)
