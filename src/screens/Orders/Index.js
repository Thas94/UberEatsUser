import { View, StyleSheet, Text, FlatList } from "react-native";
import OrdersListItem from "../../components/OrderListItem/Index";
import {useOrderContext} from '../../context/OrderContext';

const Orders = () => {

    const {orders} = useOrderContext();

    return(
        <View style={{flex: 1, width: '100%'}}>
            <FlatList data={orders} renderItem={({item}) => <OrdersListItem order={item} /> } />
        </View>
    );
};

export default Orders;
