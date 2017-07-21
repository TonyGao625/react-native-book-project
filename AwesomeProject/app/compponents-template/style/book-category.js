import { StyleSheet } from 'react-native';
import Themes from './../../src/themes/themes'

const Styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Themes.color,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Styles;