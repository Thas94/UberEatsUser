import {View, Text, StyleSheet, FlatList} from 'react-native';

const BusketDishItem = ({busketDish}) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>{busketDish.quantity}</Text>
            </View>
            <Text style={styles.name}>{busketDish.Dish.name}</Text>
            <Text style={styles.totalPrice}>R {busketDish.Dish.price}</Text> 
        </View>
    );
};

export default BusketDishItem;

const styles = StyleSheet.create({
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
    name: {
        fontWeight: '700',
    },
})