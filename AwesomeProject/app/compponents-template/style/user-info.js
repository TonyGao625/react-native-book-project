import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 40,
    paddingTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Styles;