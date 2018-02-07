import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button, Card, Content, Header, ProgressBar,
} from './components';
import styles from './Storybook.style';

const { COLOR } = THEME;

const LIPSUM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const LIPSUM_IMAGE = 'https://imgs-akamai.mnstatic.com/5e/04/5e0481f5cb0fdb1536b9f72c20141afa.jpg?output-quality=86&output-format=progressive-jpeg&interpolation=lanczos-none&fit=around%7C236%3A190&crop=236%3A190%3B%2A%2C%2A';
const LIPSUM_COMMENT = {
  avatar: 'http://soyjavi.com/assets/images/soyjavi.png',
  text: 'Nos lo recomendó la casera del apartamento que habíamos alquilado en Korcula, la playa está a 20 minutos, el GPS ',
};

class Storybook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
    };
    this._onDialog = this._onDialog.bind(this);
  }

  _onDialog() {
    this.setState({ dialog: !this.state.dialog });
  }

  render() {
    return (
      <View>
        <Header title="minube" description="reactor" />
        <Content style={styles.container}>
          <Text style={styles.title}>Buttons</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <Button title="default" />
            <Button title="disabled" disabled />
            <Button title="accent" color={COLOR.ACCENT} />
            <Button title="primary" color={COLOR.PRIMARY} />
            <Button title="error" color={COLOR.ERROR} />
            <Button title="white" color={COLOR.WHITE} />
            <Button title="Color & disabled" color={COLOR.PRIMARY} disabled />

            <Button title="activity" activity accent />
            <Button title="color & activity" activity accent color={COLOR.PRIMARY} />

            <Button icon="search" color={COLOR.ACCENT} />
            <Button icon="search" title="icon & title" color={COLOR.ACCENT} />
            <Button icon="search" color={COLOR.PRIMARY} activity />
          </View>

          <Text style={styles.title}>Cards</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <Card
              image={LIPSUM_IMAGE}
              title="Pupnatska Luka"
              description="Playas en Korcula"
              rating={4}
              comment={LIPSUM_COMMENT}
            />

            <Card
              image={LIPSUM_IMAGE}
              title="Pupnatska Luka"
              description="Playas en Korcula"
              rating={2}
              comment={{ comment: LIPSUM_COMMENT.comment }}
            />

            <Card title="Empty" empty />

            <Card title="With a children" description={LIPSUM}>
              <Button title="Remove" color={COLOR.PRIMARY} />
            </Card>
          </View>


          <Text style={styles.title}>Forms</Text>
          <View style={[STYLE.SHADOW, styles.content]}>

          </View>

          <Text style={styles.title}>ProgressBar</Text>
          <View style={[STYLE.SHADOW, styles.content]}>
            <Text>indeterminate</Text>
            <ProgressBar indeterminate />
            <Text>valued</Text>
            <ProgressBar progress={0.33} />
          </View>
        </Content>
      </View>
    );
  }
}

export default Storybook;
