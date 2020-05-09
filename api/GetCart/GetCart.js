import { AsyncStorage } from "react-native";

const GetCart = async () => {
    try {
      const value = await AsyncStorage.getItem('@Cart');
      if (value !== null) {
        return JSON.parse(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };

export default GetCart;