import { Image, StyleSheet } from "react-native";

const styles = (props = "") => {
    return StyleSheet.create({
      main: {
        height: props.size ?? 100,
        width:  props.size ?? 100,
        backgroundColor: props.backgroundColor ?? "#FFF",
        borderRadius: props.borderRadius ?? 100,
        justifyContent: "center",
        alignItems: "center",
      },
    });
  };

const BoxedImage = ({ imageSrc, ...rest }) => {
  console.log(rest);
  return <Image source={imageSrc} style={styles(rest)?.image} />;
};

export default BoxedImage