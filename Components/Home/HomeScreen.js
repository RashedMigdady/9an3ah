import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, FlatList } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import CategoriesList from './CategoriesList';
import WorkerListItem from './WorkerListItem';


const HomeScreen = () => {

    const [workers, setWorkers] = useState([]);

    let cities = [
        {
            value: 'اربد',
        },
        {
            value: 'عمّان',
        },
        {
            value: 'جرش',
        },
        {
            value: 'عجلون',
        },
        {
            value: 'المفرق',
        },
        {
            value: 'مأدبا',
        },
        {
            value: 'معان',
        },
        {
            value: 'الطفيلة',
        },
        {
            value: 'العقبة',
        },
        {
            value: 'الكرك',
        },
        {
            value: 'الزرقاء',
        }
        ,
        {
            value: 'السلط',
        }
    ];

    let items = [
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
        { img: require('../../assets/Home/avatar.png'), name: 'Mohamad', field: 'مبرمج', location: 'عمّان' },
    ]
    let renderItem = ({ item, index }) => {
        if (item.empty === true) {
            // return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <WorkerListItem img={item.img} name={item.name} field={item.field} location={item.location} />
        );
    };

    return (
        <View>
            <View style={styles.bar}>
                <View style={styles.searchSection}>
                    <Image style={styles.profileIcon} source={require('../../assets/Home/man.png')} />
                    <TextInput style={styles.input} placeholder='ابحث عن فنّي ...' placeholderTextColor='#A7A7A7'></TextInput>
                </View>
                <Dropdown label='اختار المحافظة ...' data={cities} />
                <CategoriesList />
            </View>

            <ScrollView style={styles.container}>
                <FlatList
                    data={items}
                    style={styles.gridView}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginVertical: 20,
    },
    bar: {
        backgroundColor: '#FFE346',
        height: '60%',
        width: '100%',
    },
    searchSection: {
        marginTop: 38,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        flex: 2.5,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#FFF',
        color: '#424242',
        borderRadius: 25
    },
    profileIcon: {
        flex: 0.5,
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})

export default HomeScreen;
