import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.black}>Bienvenido</Text>
            <Image 
            style={styles.tinyLogo}
            source={{
            uri:'https://scontent.ftij1-2.fna.fbcdn.net/v/t1.15752-9/256046718_670532863916649_8980955733801093157_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=AFKT306UPGMAX_fZLur&tn=stfkzUXegAACJOHm&_nc_ht=scontent.ftij1-2.fna&oh=44809213530df7166b38ea263e86131d&oe=61B9525E',
            }}/>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 400,
    },
    black:{
        fontWeight:'bold',
        fontSize:22,
    },
});