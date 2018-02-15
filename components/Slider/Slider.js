import { array, arrayOf, func, number, oneOfType, shape } from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import styles from './Slider.style';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollX: 0,
    };
    this._onScroll = this._onScroll.bind(this);
  }

  _onScroll() {
    this.setState({ scrollX: 0 });
  }

  render() {
    const {
      _onScroll,
      props: { dataSource, item: Item, style },
    } = this;

    return (
      <ScrollView
        horizontal
        onScroll={_onScroll}
        style={StyleSheet.flatten([styles.containter, style])}
        contentContainerStyle={styles.content}
      >
        {
          dataSource.map((data, index) => <Item key={index} data={data} />) //eslint-disable-line
        }
      </ScrollView>
    );
  }
}

Slider.propTypes = {
  dataSource: arrayOf(shape({})),
  item: func,
  style: oneOfType([array, number]),
};

Slider.defaultProps = {
  dataSource: [],
  item: undefined,
  style: [],
};

export default Slider;
