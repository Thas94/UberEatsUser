import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderDtails from '../screens/OrderDetails/Index';
import OrderLiveUpdates from "../screens/OrderLiveUpdates/Index";

const Tab = createMaterialTopTabNavigator();

const OrderDetailsNavigator = ({route}) => {

    const id = route?.params?.id;

    return(
        <Tab.Navigator>
            <Tab.Screen name='Details'>
                {() => <OrderDtails id={id}/>}
            </Tab.Screen>
            
            <Tab.Screen name='Updates' >
                {() =>  <OrderLiveUpdates id={id}/>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default OrderDetailsNavigator;