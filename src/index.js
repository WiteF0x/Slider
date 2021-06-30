import React from 'react';

import Slider from './Slider';

const data = [
  {
    title: 'First Slide',
    subTitle: 'First subtitle',
    backgroundColor: '#ffffff',
    image: require('./assets/images/first.png'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Second Slide',
    subTitle: 'Second subtitle',
    backgroundColor: '#A9A9A9',
    image: require('./assets/images/second.png'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Third Slide',
    subTitle: 'Third subtitle',
    backgroundColor: '#696969',
    image: require('./assets/images/third.png'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const App = () => <Slider data={data}/>;

export default App;

// interface
// data - array of slides
// Example:
// data = [
//  {
//    title: string,
//    subTitle: string,
//    description: string,
//    backgroundColor: sting,
//    image: require(path) || { uri: URL },
//    styles: { title, subTitle, description, image, next, done, dot  },
//  },
//  
//  <Component
//    data={data}
//    showNext: bool,
//    showDone: bool,
//    showDots: bool,
//    onDone: func,
//  />
//];
