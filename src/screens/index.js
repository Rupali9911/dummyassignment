import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles';

const RootScreen = () => {
    //=============Create component states==========
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    //=============useeffect called===============
    useEffect(() => {
        try {
            renderListData(1)
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }, []);

    //==================API Call=================
    const renderListData = (page) => {
        setLoading(true)
        axios.get(`https://reqres.in/api/users?page=${page}`)
            .then((response) => {
                setLoading(false)
                console.log('here is response : ', response?.data)
                newArray = data.concat(response?.data?.data);
                setData(newArray)
                setTotal(response?.data?.total)
                setPage(response?.data?.page)
            })
            .catch((err) => {
                console.log('here is error : ', err)
                setError(err)
                setLoading(false)

            })
    }

    //===============render list items==============
    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={styles.listContainer}>
                    <Image
                        source={{ uri: item?.avatar }}
                        style={styles.img}
                    />
                    <Text style={styles.text}>{item?.first_name}</Text>
                    <Text style={styles.text}>{item?.last_name}</Text>
                </View>
            </>
        )
    }

    //===============Keyextractor==============
    const keyExtractor = (item, index) => {
        return index;
    }


    //===============On End Reached Flatlist==============
    const handleFlatlistOnEndReached = () => {
        console.log('onEndReached Called ')
        if (data?.length != total) {
            pageNum = page + 1;
            renderListData(pageNum)
        }
    }

    //===============Return React Elements==============
    return (
        loading && data?.length === 0
            ?
            <View style={styles.indecator}>
                <ActivityIndicator size={'large'} color={'green'} />
            </View>
            :
            data && data?.length > 0
                ?
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Here is List Data</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        onEndReached={handleFlatlistOnEndReached}
                    // onEndReachedThreshold={0.4}
                    />
                </SafeAreaView>
                :
                <View style={styles.indecator}>
                    <Text>No Data Found</Text>
                </View>
    )
}

export default RootScreen
