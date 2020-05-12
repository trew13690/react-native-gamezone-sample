import React, {useState} from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from 'react-native'
import {globalStyles} from "../styles/global";
import ReviewDetails from "./reviewDetails";
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {
    const [modalOpen, setModal] = useState(false)
    const [reviews, setReviews] = useState([
        {
            title: "Zelda, Breath of Fresh Air",
            rating: 5,
            body: 'lorem ipsum ',
            key: '1'
        },
        {
            title: 'Gotta Catch Them all(again)',
            rating: 4, body: 'lorem ipsum',
            key: '2'

        },
        {
            title: "Not so Final Fantasy",
            rating: 3,
            body: 'lopem ipsum',
            key: '3'
        }
    ])

    return (
        <View style={globalStyles.container}>


            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{...styles.modalToggle,...styles.modalClose}}
                        onPress={() => setModal(false)}
                    />
                    <ReviewForm/>
                </View>
            </Modal>

            <Modal visible={false} animationType='slide'>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModal(true)}
            />


            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ReviewDetails', item)
                    }}>
                        <Card>
                            <Text style={globalStyles.title}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}/>

        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 30,
        marginBottom: 0,

    },
    modalContent: {
        flex: 1
    }
})
