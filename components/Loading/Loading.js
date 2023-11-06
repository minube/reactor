import React, { PureComponent } from 'react';
import {Animated, View} from 'react-native';

import styles from './Loading.style';

class Loading extends PureComponent {


  render() {
    return (
        <Animated.View style={[
            styles.EmailConfirmation
        ]}/>
    );
  }
}

export default Loading;
