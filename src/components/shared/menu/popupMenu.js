import React from 'react';
import {View,StyleSheet, TouchableOpacity,UIManager,findNodeHandle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ICON_SIZE = 24;

class PopupMenu extends React.Component {
  handleShowPopupError = () => {
    // show error here
    alert('TODO:');
  };

  handleMenuPress = () => {
    const { actions, onPress } = this.props;

    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      actions,
      this.handleShowPopupError,
      onPress,
    );
  };

  render() {
    return (
      <View>
        { this.props.children }
        <TouchableOpacity 
            onPress={this.handleMenuPress} 
            style={styles.btn}
        >
          <Icon
            name="md-more"
            size={ICON_SIZE}
            color='gray'
            ref="menu"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
        alignSelf:'center',
        backgroundColor:'transparent',
        paddingLeft:10,
        paddingRight:15,
    }
});

export default PopupMenu;