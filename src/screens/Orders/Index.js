import { View, StyleSheet, Text, FlatList } from "react-native";
import OrdersListItem from "../../components/OrderListItem/Index";
import OrderItems from '../../data/orders.json';


const Orders = () => {
    return(
        <View style={{flex: 1, width: '100%'}}>
            <FlatList data={OrderItems} renderItem={({item}) => <OrdersListItem order={item} /> } />
        </View>
    );
};

export default Orders;
