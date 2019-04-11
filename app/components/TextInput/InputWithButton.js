import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, TextInput } from "react-native";
import color from "color";
import styles from "./styles";

const InputWithButton = props => {
  const underlayColor = color(styles.$buttonBackgrounColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonConatiner}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
