import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(){
    return (
        <View style= {globalStyles.content}>
            <Text style = {globalStyles.titleText}>form home screen</Text>
        </View>
    );
}


