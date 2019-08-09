import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { Dimensions } from 'react-native';
import { DrawerContent } from 'src/components/layout';

import { screenConfig } from './config';

// auth
import AuthPage from 'src/screens/auth';

import Home from 'src/screens/home';
import Restaurants from 'src/screens/restaurant';
import Cart from 'src/screens/cart';

const AuthNavigator = createStackNavigator(
    {
        [screenConfig.auth.index]: AuthPage
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.auth.index
    }
);

const HomeNavigation = createStackNavigator(
    {
        [screenConfig.main.home]: Home,
        [screenConfig.main.restaurants.index]: Restaurants,
        [screenConfig.main.cart]: Cart
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.main.cart
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: HomeNavigation
    },
    {
        initialRouteName: 'Home',
        drawerWidth: Dimensions.get('window').width * 0.9, // 90% of screen width
        drawerPosition: 'right',
        contentComponent: DrawerContent,
        backBehavior: 'none'
    }
);

export const RootNavigator = createAppContainer(
    createSwitchNavigator(
        { Auth: AuthNavigator, Main: MainNavigator },
        {
            initialRouteName: 'Main'
        }
    )
);
