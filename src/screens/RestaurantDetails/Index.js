import { View, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem/Index';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { DataStore } from 'aws-amplify';
import {Restaurant, Dish} from '../../models/index';

const RestaurantDetailsPage = () =>{

    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDish] = useState([]);

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id; 

    useEffect(() =>{
        DataStore.query(Restaurant, id).then(setRestaurant);

        DataStore.query(Dish, (dish) => dish.restaurantID('eq', id)).then(setDish);
    },[]);

    if(!restaurant){
        return <ActivityIndicator size={'large'} style={{paddingVertical: 350}}/>
    }

    return (
        <View style={styles.page}>

            <FlatList 
                ListHeaderComponent={() => <Header restaurant={restaurant} />}
                data={dishes}
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