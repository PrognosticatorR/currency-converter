import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { ListItem, Separator } from "../components/List";
import { changePrimaryColor } from "../actions/theme";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $green: "$primaryGreen",
  $orange: "$primaryOrange",
  $purple: "$primaryPurple"
});

export class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };
  handleThemePress = color => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="dark-content" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          iconBackground={styles.$blue}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          iconBackground={styles.$orange}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          iconBackground={styles.$green}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          iconBackground={styles.$purple}
          selected
          checkmark={false}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
