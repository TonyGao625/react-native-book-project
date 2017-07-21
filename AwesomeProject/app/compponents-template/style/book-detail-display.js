import { StyleSheet,Dimensions } from 'react-native';
var WINDOW_WIDTH = Dimensions.get('window').width;
var BASE_PADDING = 10;

const Styles = StyleSheet.create({
    rowDirection: {
        flexDirection: 'row'
    },
    boldText: {
        fontWeight: "bold"
    },
    contentField: {
        marginTop: 12
    },
    navigator: {
        flex: 1,
    },
    container: {
        paddingHorizontal: BASE_PADDING,
    },
    containerTab:{
        marginLeft:-10,
        marginRight:-10
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
        marginTop: 70
    },
    col: {
        flex: 1,
    },
    square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    carousel: {
        height: WINDOW_WIDTH - BASE_PADDING * 2,
        width: WINDOW_WIDTH - BASE_PADDING * 2,
        backgroundColor: 'white',
    },
    contain: {
        flex: 1,
        height: 150,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        marginTop: 10,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
});

export default Styles;