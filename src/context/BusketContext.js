import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Busket, BusketDish } from "../models";
import {useAuthContext} from './AuthContext';

const BusketContext = createContext({});

const BusketContextProvider = ({children}) => {

    const {dbUser} = useAuthContext();

    const [restaurant, setRestaurant] = useState(null);
    const [busket, setBusket] = useState(null);

    useEffect(() => {
        DataStore.query(Busket, (b) => 
        b.restaurantID('eq', restaurant.id).userID('eq', dbUser.id)
        ).then((buskets) => setBusket(buskets[0]));
    },[dbUser,restaurant])

    const addDishToBusket = async (dish, quantity) => {
        // get the existing busket or create a new one
        let theBusket = busket || (await createNewBusket());

        // create a busketDish item and save to datastore
        DataStore.save(new BusketDish({quantity, Dish: dish, busketID: theBusket.id }));
    };

    const createNewBusket = async () => {
         const newBusket = await DataStore.save(new Busket({userID: dbUser.id, restaurantID: restaurant.id}));
         setBusket(newBusket);
         return newBusket;
    }

    return (
        <BusketContext.Provider value={{addDishToBusket, setRestaurant}}>
            {children}
        </BusketContext.Provider>
    )
}

export default BusketContextProvider;

export const useBusketContext = () => useContext(BusketContext); 