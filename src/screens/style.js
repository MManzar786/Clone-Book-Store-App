import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    // borderColor: COLORS.white,
    // borderWidth: 5,
  },
  header: {
    flex: 1 / 6,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    marginTop: 20,
    height: 80,
    // borderColor: COLORS.white,
    // borderWidth: 5,
  },
  points: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    marginTop: 10,
    borderRadius: 25,
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
  },
  pointPlusCircle: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
  },
  pointPlusSign: {
    height: 35,
    width: 35,
  },
  pointText: {
    color: COLORS.white,
    padding: 20,
    fontSize: 18,
  },
  buttonSection: {
    flex: 1,
    // flexDirection: "row",
    padding: SIZES.padding,
    marginTop: 30,
  },
  buttonInnerView: {
    backgroundColor: COLORS.secondary,
    height: "15%",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
  },
});
