import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  borrow: {
    flex: 1
  },
  container: {
    marginBottom: 55
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey",
  },
  titleView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    width: '90%'
  },
  title: {
    marginRight: 80
  },
  statusIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200,
    paddingTop: 10,
    paddingRight: 10
  },
  itemContainer: {
    flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey", borderBottomWidth: 1,
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
  statusIcon: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Styles;