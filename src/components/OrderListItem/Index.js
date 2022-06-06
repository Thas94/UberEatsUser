import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrdersListItem = ({order}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.row}>
            <Image source={{uri: order.Restaurant.image}} style={{width: 75, height: 75, marginRight: 10}} />

            <Pressable onPress={() => navigation.navigate('Order', {id: order.id})}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>{order.Restaurant.name}</Text>
                <Text style={{marginVertical: 5}}>2 Items &#8226; R50.10</Text>
                <Text>{order.createdAt} &#8226; {order.status}</Text>
            </Pressable>
        </View>
    );
};

export default OrdersListItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },

});