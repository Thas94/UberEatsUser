import HomeScreen from '../screens/HomeScreen/Index';
import RestaurantDetailsPage from '../screens/RestaurantDetails/Index';
import DishDetails from '../screens/DishDetails/Index';
import Busket from '../screens/Busket/Index';
import Orders from '../screens/Orders/Index';
import OrderDetails from '../screens/OrderDetails/Index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import Profile from '../screens/Profile/Index';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={HomeTabs} /> 
        </Stack.Navigator>
    );
}; 

const Tab = createBottomTabNavigator();

const HomeTabs = () => { 
    return(
        <Tab.Navigator screenOptions={{headerShown: false}} barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen name='Home' component={HomeStackNavigator} 
            options={{tabBarIcon: ({color}) => <FontAwesome5 name="home" size={24} color={color} />}} />
            <Tab.Screen name='Orders' component={OrdersStackNavigator} 
            options={{tabBarIcon: ({color}) => <MaterialCommunityIcons name="food" size={24} color={color} />}}/>
            <Tab.Screen name='Profile' component={Profile} 
            options={{tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />}}/> 
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsPage} options={{headerShown: false}}/>
            <HomeStack.Screen name='Dish' component={DishDetails}/>
            <HomeStack.Screen name='Busket' component={Busket}/>
        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return(
        <OrdersStack.Navigator>
            <OrdersStack.Screen name='Orders' component={Orders}/>
            <OrdersStack.Screen name='Order' component={OrderDetails}/>
        </OrdersStack.Navigator>
    );
};

export default RootNavigator; 