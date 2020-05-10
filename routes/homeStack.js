import {createStackNavigator} from "react-navigation-stack";
import Home from '../screens/home'
import  {createAppContainer} from 'react-navigation'
import ReviewDetails from "../screens/reviewDetails";

const screens = {
   Home: {
       screen: Home,
       navigationOptions: {
           title: 'GameZone',

       }

   },
    ReviewDetails: {
       screen: ReviewDetails,

        navigationOptions: {
            title: 'Review Details',
        }
    }

}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 80},
    }
})


export default createAppContainer(HomeStack)
