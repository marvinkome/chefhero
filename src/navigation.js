import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { Dimensions } from 'react-native';
import { DrawerContent } from 'src/components/layout';

import { screenConfig } from './config';

import AuthPage from 'src/screens/auth';
import CurrentOrders from 'src/screens/orders/current';


const AuthNavigator = createStackNavigator(
    {
        [screenConfig.auth.index]: AuthPage
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.auth.index
    }
);

const OrdersNavigator = createStackNavigator(
    {
        [screenConfig.main.orders.currentOrders]: CurrentOrders,
        // [screenConfig.main.orders.createOrders]: SelectRestaurant,
        // [screenConfig.main.orders.selectMeals]: SelectMeals,
        // [screenConfig.main.orders.reviewOrders]: ReviewOrders,
        // [screenConfig.main.orders.ordersPayment]: OrdersPayment
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.main.orders.currentOrders
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Orders: OrdersNavigator,
        // Restaurants: RestaurantsNavigator
    },
    {
        initialRouteName: 'Orders',
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