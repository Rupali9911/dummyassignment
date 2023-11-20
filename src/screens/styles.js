import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#808080'
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    listContainer: {
        padding: 20,
        margin: 8,
        backgroundColor: '#D3D3D3',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    img: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        borderRadius: 25
    },
    text: {
        color: 'green',
        fontSize: 16,
        fontWeight: '500'
    },
    indecator: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})