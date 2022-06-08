import {Text, View, Image, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import OrdersListItem from '../../components/OrderListItem/Index';
import orders from '../../data/orders.json';
import restaurants from '../../data/restaurants.json';
import styles from '../RestaurantDetails/styles';
import BusketDishItem from '../../components/BusketDishItem/Index';
import { useOrderContext } from '../../context/OrderContext';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState} from 'react';

const orderList = orders[0];
const restaurant = restaurants[0];


const OrderDetailsHeader = ({order}) => {

    return (
        <View>
            <View style={styles.page}>
                <Image source={{uri: order.Restaurant.image}} style={styles.image} />

                <View style={styles.container}>
                    <Text style={styles.title}>{order.Restaurant.name}</Text>
                    <Text style={styles.subtitle}>{order.status} &#8226; {order.Restaurant.createdAt}</Text>
                    <Text style={styles.menuTitle}>Your orders</Text>
                </View> 
            </View>
        </View>
    );
};

const OrderDetails = () => {

    const [order, setOrder] = useState();
    const {getOrderById} = useOrderContext();
    const route = useRoute();
    const id = route.params?.id;

    useEffect(() =>{
        getOrderById(id).then(setOrder);
    }, []);

    if(!order){
        return <ActivityIndicator size={'large'} style={{paddingVertical:350}}/> 
    }

    return (
        <FlatList ListHeaderComponent={()=> <OrderDetailsHeader order={order}/>} data={order.dishes}
        renderItem={({item}) => <BusketDishItem busketDish={item}/>}/>
    );
};

export default OrderDetails;