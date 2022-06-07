import { StyleSheet, FlatList, View } from 'react-native';
import { useState, useEffect } from 'react';
import RestaurantItem from '../../components/RestaurantItem/Index';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models/index';

export default function HomeScreen() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View style={styles.page}>
        <FlatList 
        data={restaurants} 
        renderItem={({item}) => <RestaurantItem restaurant={item}/>}
        showsVerticalScrollIndicator={false}
        />
    </View>

  );
}

const styles = StyleSheet.create({

    page: {
        padding: 10,
        paddingVertical: 30,
    }
});
