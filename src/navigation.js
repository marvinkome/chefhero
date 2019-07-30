import {
    createStackNavigator,
    // createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { screenConfig } from './config';

import AuthPage from './screens/auth';

const AuthNavigator = createStackNavigator(
    {
        // [screenConfig.auth.onBoarding]: OnBoarding,
        // [screenConfig.auth.register]: Register,
        // [screenConfig.auth.login]: Login,
        [screenConfig.auth.index]: AuthPage
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.auth.index
    }
);

// const MainNavigator = createDrawerNavigator(
//     {
//         Orders: OrdersNavigator,
//         Restaurants: RestaurantsNavigator
//     },
//     {
//         initialRouteName: 'Orders',
//         drawerWidth: Dimensions.get('window').width * 0.9, // 90% of screen width
//         drawerPosition: 'right',
//         contentComponent: DrawerContent,
//         backBehavior: 'none'
//     }
// );

export const RootNavigator = createAppContainer(
    createSwitchNavigator(
        { Auth: AuthNavigator },
        {
            initialRouteName: 'Auth'
        }
    )
);