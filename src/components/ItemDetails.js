import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemDetails = (props) => {
    console.log(props.route.params)
    const{title,date,rating,brief,coverImage} = props.route.params;
    return (
        <View>
            <Text>{title}</Text>
            <Text>{brief}</Text>
            <Text>{date}</Text>
            <Text>{rating}</Text>

        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({})
