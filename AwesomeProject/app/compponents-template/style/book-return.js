import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    return: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    title: {
        marginRight: 80
    },
    statusIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 200
    },
    icon: {
        marginRight: 10
    }
});

export default Styles;