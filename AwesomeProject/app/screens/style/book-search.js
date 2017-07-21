import { StyleSheet } from 'react-native';
import Themes from './../../src/themes/themes'

const Styles = StyleSheet.create({
    search: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: -20,
        marginRight: 30
    },
    searchText: {
    },
    buttonView: {
        width: 60,
        marginRight: 10
    },
    button: {
        backgroundColor: Themes.color,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    buttonText: {
        color: "#FFF",
        fontWeight: 'bold'
    },
});

export default Styles;