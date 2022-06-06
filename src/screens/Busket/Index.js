import {View, Text, StyleSheet, FlatList} from 'react-native';
import restaurants from '../../data/restaurants.json';
import BusketDishItem from '../../components/BusketDishItem/Index';
 

const restaurant = restaurants[0];

const Busket = () => {

    return (
        <View style={styles.page}>
            <Text style={styles.restName}>{restaurant.name}</Text>
            <Text style={styles.item}>Your Items</Text>
            
            <FlatList data={restaurant.dishes} renderItem={({item}) => <BusketDishItem busketDish={item}/>} />

            <View style={styles.separator}/>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
            </View>

        </View>

    );
};

export default Busket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        marginVertical: 30,
        padding: 10,
    },
    restName: {
        fontSize: 30,
        fontWeight: '800',

    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    totalPrice: {
        marginLeft: 'auto',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    name: {
        fontWeight: '700',
    },
    item: {
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10
    },
    button: {
        marginTop: 'auto',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10 
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
        

    },
})
