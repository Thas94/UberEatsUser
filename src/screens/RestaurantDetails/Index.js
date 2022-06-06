import { View, FlatList} from 'react-native';
import restaurants from '../../data/restaurants.json';
import {Ionicons} from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem/Index';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () =>{

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id; 
    console.warn(id);

    return (
        <View style={styles.page}>

            <FlatList 
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem = {({item}) => <DishListItem dish={item} 
                keyExtractor={(item) => item.name} />}
            />
            <Ionicons name='arrow-back-circle' 
                onPress={() => navigation.goBack()}
                size={45} 
                color='white' 
                style={styles.imageIcon} 
            /> 
        </View>
    );
};

export default RestaurantDetailsPage;