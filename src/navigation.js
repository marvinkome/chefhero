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

// orders
import CurrentOrders from 'src/screens/orders/current';
import SelectRestaurant from 'src/screens/orders/create/restaurant';
import SelectMeals from 'src/screens/orders/create/meals';


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
        [screenConfig.main.orders.createOrders]: SelectRestaurant,
        [screenConfig.main.orders.selectMeals]: SelectMeals,
        // [screenConfig.main.orders.reviewOrders]: ReviewOrders,
        // [screenConfig.main.orders.ordersPayment]: OrdersPayment
    },
    {
        headerMode: 'none',
        initialRouteName: screenConfig.main.orders.selectMeals
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