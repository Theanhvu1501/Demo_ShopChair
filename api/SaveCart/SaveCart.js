import { AsyncStorage } from 'react-native'

const SaveCart = async (arrayCart) => {
    await AsyncStorage.setItem('@Cart',JSON.stringify(arrayCart))
}

export default SaveCart;