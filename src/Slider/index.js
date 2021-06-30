import React, { useRef } from 'react';
import { Animated, Dimensions, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import SliderItem from './SliderItem';
import Bottom from './Bottom';

import styles from './styles';

const { width } = Dimensions.get('window');

const Slider = (props) => {
  const {
    data,
    showNext,
    showDone,
    showDots,
    onDone,
    dotPosition,
    nextPosition,
  } = props;

  const list = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  const backgroundColor = scrollX.interpolate({
    inputRange: data?.map((item, index) => index === 0 ? 0 : width * index),
    outputRange: data?.map(_ => _.backgroundColor || 'white'),
  });

  const _renderItem = (props) => <SliderItem { ...props } scrollX={scrollX}/>

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.FlatList
          ref={list}
          data={data}
          horizontal
          pagingEnabled
          renderItem={_renderItem}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            },
            ],
            { useNativeDriver: false }
          )}
        />
        
        <Bottom
          list={list}
          scrollX={scrollX}
          count={data?.length}
        />
      </SafeAreaView>
    </Animated.View>
  );
};

Slider.propTypes = {

};

export default Slider;
