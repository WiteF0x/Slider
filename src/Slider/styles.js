import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    flex: 1,
    width,
    alignItems: 'center',
  },
  defaultSlideTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: scale(24),
  },
  defaultSlideSubTitle: {
    fontWeight: '500',
    color: 'black',
    fontSize: scale(16),
    marginTop: verticalScale(16),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  image: {
    maxWidth: width * .5,
    maxHeight: width * .5,
    marginBottom: verticalScale(16),
  },
  description: {
    fontSize: scale(14),
    fontWeight: '400',
    textAlign: 'center',
  },
  bottom: {
    width,
    height: 75,
    flexDirection: 'row',
  },
  prev: {
    flex: 1,
    padding: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  dots: {
    flex: 1,
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    padding: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  back: {
    width: 35,
    height: 35,
  },
});

export default styles;
