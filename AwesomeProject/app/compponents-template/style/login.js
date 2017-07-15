
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width,
    height,
  },
  form: {
    paddingVertical: 30,
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 20,
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  remarkWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  remarkText: {
    color: "#D8D8D8"
  }
});

export default Styles;