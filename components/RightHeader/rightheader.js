import { View, StyleSheet } from "react-native"
import BoxedImage from "../BoxedImage/boxedimage"

const styles = (props = "") => {
  return StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
  });
};


const fileImg = require("../../assets/righthead.svg")
const dotsImg = require("../../assets/dots.svg")

const RightHeader = (props) => {
    return(
        <View style={styles(props).header}>
            <BoxedImage imageSrc={fileImg} height={32} width={32}  />
            <BoxedImage imageSrc={dotsImg} height={32} width={32}  />
        </View>
    );
};

export default RightHeader;