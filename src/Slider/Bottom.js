import React, { useRef } from 'react';
import {
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Dots from './Dots';
import Button from './Button';

import styles from './styles';

const Bottom = ({ list, count, scrollX }) => {
  const prev = () => (
    <View style={styles.prev}>
      <Icon name='arrow-back-outline' size={35} color='black'/>
    </View>
  );

  return (
    <View style={styles.bottom}>
      { prev() }
      <Dots/>
      <Button/>
    </View>
  )
};

export default Bottom;