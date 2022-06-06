import { Text, Image, View} from 'react-native';
import restaurants from '../../data/restaurants.json';
import styles from './styles'; 

const RestaurantHeader = ({restaurant}) =>{
    return (
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image} />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>R{restaurant.deliveryFee} &#8226; 
                    {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                <Text style={styles.menuTitle}>Menu</Text>
            </View> 
        </View>
    );
};

export default RestaurantHeader;