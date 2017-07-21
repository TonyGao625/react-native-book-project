import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");
import Themes from './../../src/themes/themes'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    marginTop: 10
  },
  inputWrap: {
    flexDirection: "row",
    height: 80,
    borderBottomWidth: 0
  },
  name: {
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Themes.color,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});

export default Styles;