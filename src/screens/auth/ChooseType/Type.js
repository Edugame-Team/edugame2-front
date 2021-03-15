import * as React from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import ImageBackground from "react-native-web/dist/exports/ImageBackground";
import Colors from '../../../contants/Colors';
import View from "react-native-web/dist/exports/View";

const Type = ({ user, navigation }) => (
    <TouchableOpacity style={styles.item}
                      activeOpacity={0.6}
                      onPress={() => navigation.navigate('Login')}
    >
        <ImageBackground source={require('../../../../assets/img/type/'+ user.img)} style={styles.image}>
            <View style={styles.filter}>
                <Text style={styles.text}>{user.choose_type}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);
export default Type;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        width: '33%',
        height: '100%',
    },
    image: {
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        flex:1,
        alignItems: 'stretch',
        position: 'absolute',
    },
    text: {
        textAlign: 'center',
        fontSize: 32,
        paddingVertical: '40',
        color: Colors.white,
        marginBottom:25,
        marginLeft: 5,
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    filter: {
        height: '100%',
        backgroundColor: Colors.filter,
        justifyContent: 'flex-end',
    }
});
