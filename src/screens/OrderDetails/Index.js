import {Text, View, Image, FlatList, StyleSheet} from 'react-native';
import OrdersListItem from '../../components/OrderListItem/Index';
import orders from '../../data/orders.json';
import restaurants from '../../data/restaurants.json';
import styles from '../RestaurantDetails/styles';
import BusketDishItem from '../../components/BusketDishItem/Index';

const orderList = orders[0];
const restaurant = restaurants[0];


const OrderDetailsHeader = () => {
    return (
        <View>
            <View style={styles.page}>
                <Image source={{uri: orderList.Restaurant.image}} style={styles.image} />

                <View style={styles.container}>
                    <Text style={styles.title}>{orderList.Restaurant.name}</Text>
                    <Text style={styles.subtitle}>{orderList.status} &#8226; {orderList.Restaurant.createdAt}</Text>
                    <Text style={styles.menuTitle}>Your orders</Text>
                </View> 
            </View>
        </View>
    );
};

const OrderDetails = () => {
    return (
        <FlatList ListHeaderComponent={OrderDetailsHeader} data={restaurants[0].dishes} 
        renderItem={({item}) => <BusketDishItem busketDish={item}/>}/>
    );
};

export default OrderDetails;