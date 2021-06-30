import React from 'react';
import {
  View,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import styles from './styles';

const { width } = Dimensions.get('window');

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

const SliderItem = ({ item, index, scrollX }) => {
  const inputRange = [(index - 0.7) * width, index * width, (index + 0.7) * width ];
  const subTitleInputRange = [(index - 0.35) * width, index * width, (index + 0.35) * width];
  const imageInputRange = [(index - 0.5) * width, index * width, (index + 0.5) * width];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.2, 1, 0.2],
  });

  const imageOpacity = scrollX.interpolate({
    inputRange: imageInputRange,
    outputRange: [0, 1, 0],
  });

  const descriptionOpacity = scrollX.interpolate({
    inputRange: subTitleInputRange,
    outputRange: [0.3, 1, 0.3],
  });

  const titleTranslateX = scrollX.interpolate({
    inputRange,
    outputRange: [-25, 0, 25],
  });

  const subTitleTranslateX = scrollX.interpolate({
    inputRange: subTitleInputRange,
    outputRange: [-width * .7, 0, width * .7]
  });

  const subTitleOpacity = scrollX.interpolate({
    inputRange: subTitleInputRange,
    outputRange: [0.1, 1, 0.1],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.4, 1, 0.4],
  });

  return (
    <View key={generateId()} style={styles.slideContainer}>
      <Animated.Text
        style={[
          styles.defaultSlideTitle,
          item?.styles?.title,
          {
            opacity,
            transform: [{ translateX: titleTranslateX }],
          }
        ]}
      >
          { item?.title }
      </Animated.Text>
      <Animated.Text
        style={[
          styles.defaultSlideSubTitle,
          item?.styles?.subTitle,
          {
            opacity: subTitleOpacity,
            transform: [{ translateX: subTitleTranslateX }],
          }
        ]}
      >
        { item?.subTitle }
      </Animated.Text>

      <View style={styles.content}>
        <Animated.Image
          source={item?.image}
          resizeMethod='contain'
          style={[
            styles.image,
            item?.styles?.image,
            {
              opacity: imageOpacity,
              transform: [{ scale }],
            }
          ]}
        />
        <Animated.Text
          style={[
            styles.description,
            item?.styles?.description,
            { opacity: descriptionOpacity },
          ]}
        >
          { item?.description }
        </Animated.Text>
      </View>
      
    </View>
  );
};

export default SliderItem;
