import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    return: {
        flex: 1
    },
    itemContainer: {
    flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey", borderBottomWidth: 1
    },
    imageContainer:{
     justifyContent: 'center', alignItems: "center",  flex: 2,
   borderBottomWidth:1,borderTopWidth:1,borderLeftWidth:1,borderRightWidth:1,
   borderBottomColor:'#ddd',borderTopColor:'#ddd',borderLeftColor:'#ddd',borderRightColor:'#ddd',
   marginLeft:10,marginRight:10
    },
    bookContainer: {
    paddingRight:10, flex: 5
    },
    IconContainer:{
     flex:1,justifyContent:"center"
    },
    titleView:{
        paddingBottom: 2
    },
    titleText:{
        fontWeight: "bold", fontStyle: "italic", fontSize: 15
    },
    authorView:{
        paddingBottom: 5
    },
    iconView:{
        position:'absolute',
        bottom:0,
        flex:1,
        flexDirection: "row"
    }
});

export default Styles;