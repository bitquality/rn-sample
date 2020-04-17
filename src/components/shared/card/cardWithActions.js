import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

import { CardActionSeparator } from '../separator'

const { width, height } = Dimensions.get('window')
const RADIUS = 10

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    width: width * 0.9,
    borderRadius: RADIUS,
    marginBottom: height * 0.05
  },
  cardContent: {
    height: (height * 0.4) * 0.8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    alignItems: 'center',
    paddingVertical: height * 0.02,
    justifyContent:'center',
    paddingHorizontal:10
  },
  cardActions: {
    height: (height * 0.4) * 0.2,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  actionButton: {
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionIcon: {
    height: 30,
    width: 30
  }
})

class CardWithActions extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  handlePress = () => {
    alert('button pressed')
  }
  handlePrivacy = () => {
    Linking.openURL('https://microsoft.sharepoint.com/teams/msdpn/SitePages/default.aspx');
  }

  render() {
    const { children } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.cardContent}>
          {children}
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity
            onPress={this.handlePrivacy}
            style={styles.actionButton}
            >
            <Ionicon
              name='md-lock'
              color= 'white'
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default CardWithActions
