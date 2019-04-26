import { node } from 'prop-types';
import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import { Viewport } from '../components';
import Header from './Header';
import styles from './Viewport.style';

export default class App extends PureComponent {
  static propTypes = {
    children: node.isRequired,
  };

  static defaultProps = {
  };

  render() {
    const { props: { children, ...inherit } } = this;

    return (
      <Viewport backward={inherit.backward} scroll={false} style={styles.container} visible={inherit.visible}>
        <Header title="Form" />
        <ScrollView contentContainerStyle={styles.content}>
          { children }
        </ScrollView>
      </Viewport>
    );
  }
}
