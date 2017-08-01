import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    itemContainer: {
        flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey", borderBottomWidth: 1
    },
    imageContainer: {
        justifyContent: 'center', alignItems: "center", flex: 3,
        borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1,
        borderBottomColor: '#ddd', borderTopColor: '#ddd', borderLeftColor: '#ddd', borderRightColor: '#ddd',
        marginLeft: 10, marginRight: 10
    },
    bookContainer: {
        paddingRight: 10, flex: 6
    },
    IconContainer: {
        flex: 1, justifyContent: "center"
    },
    titleView: {
        paddingBottom: 2
    },
    titleText: {
        fontWeight: "bold", fontStyle: "italic", fontSize: 15
    },
    dateView: {
        paddingBottom: 5
    },
    delayView:{
        flex:1,flexDirection: "row"
    }
});

export default Styles;