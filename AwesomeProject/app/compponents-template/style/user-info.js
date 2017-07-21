import { StyleSheet } from 'react-native';
import Themes from './../../src/themes/themes'

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
    backgroundColor: Themes.color,
    paddingVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Styles;