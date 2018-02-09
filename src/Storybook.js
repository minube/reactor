import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button, Content, Dialog, Header, HotelCard, Input, Link, ListingCard, PictureCard, ProgressBar, Switch,
} from './components';
import styles from './Storybook.style';

const { COLOR } = THEME;

const LIPSUM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';
const LIPSUM_COMMENT = {
  avatar: 'http://soyjavi.com/assets/images/soyjavi.png',
  text: 'Nos lo recomendó la casera del apartamento que habíamos alquilado en Korcula, la playa está a 20 minutos, el GPS ',
};

class Storybook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
      formSwitch: true,
    };
    this._onDialog = this._onDialog.bind(this);
  }

  _onDialog() {
    this.setState({ dialog: !this.state.dialog });
  }

  render() {
    const { _onDialog, state: { dialog, formSwitch } } = this;

    return (
      <View style={styles.app}>
        <Header title="minube" description="reactor" />
        <Content style={styles.container}>

          <Text style={styles.title}>Link</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <Link href="http://soyjavi.com" target="_blank">Hello WOrld</Link>
          </View>

          <Text style={styles.title}>HotelCard</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <HotelCard empty />
            <HotelCard
              image={LIPSUM_IMAGE}
              title="Hotel Kurutziaga Jauregia"
              location="Mundaka, España"
              comment="Habitaciones limpias Personal maravilloso"
              value={7}
              proposals={[]}
            />
          </View>

          <Text style={styles.title}>PictureCard</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <PictureCard empty />
            <PictureCard image={LIPSUM_IMAGE} location="{location}" />
            <PictureCard image={LIPSUM_IMAGE} title="{example of title}" />
            <PictureCard image={LIPSUM_IMAGE} title="{example of title}" caption="{example of caption}" />
            <PictureCard image={LIPSUM_IMAGE} location="{location}" title="{example of title}" caption="{example of caption}" />

            <PictureCard
              image={LIPSUM_IMAGE}
              title="Viaje a Korea"
              caption="Mar 12 Mar 17 - 4 Nights"
              onPress={() => console.log('PictureCard.onPress()')}
            />
          </View>

          <Text style={styles.title}>ListingCard</Text>
          <View style={[STYLE.SHADOW, STYLE.ROW, styles.content]}>
            <ListingCard
              image={LIPSUM_IMAGE}
              title="Pupnatska Luka"
              description="Playas en Korcula"
              rating={4}
              comment={LIPSUM_COMMENT}
              location="Croacia"
            />
            <ListingCard
              image={LIPSUM_IMAGE}
              title="Pupnatska Luka"
              description="Playas en Korcula"
              rating={2}
              comment={{ comment: LIPSUM_COMMENT.comment }}
            />
            <ListingCard title="Empty" empty />
            <ListingCard title="With a children" description={LIPSUM}>
              <Button title="Remove" color={COLOR.PRIMARY} onPress={() => console.log('Button.onPress()')} />
            </ListingCard>
          </View>

          <Text style={styles.title}>Dialog</Text>
          <View style={[STYLE.SHADOW, styles.content]}>
            <Button title="Show Dialog" primary onPress={_onDialog} />
          </View>

          <Text style={styles.title}>Forms</Text>
          <View style={[STYLE.SHADOW, styles.content]}>
            <Input label="Name" defaultValue="Javi" />
            <Input label="Description" defaultValue="Jimenez" multiline />
            <Input label="Postal Code" placeholder="?????" keyboard="numeric" />

            <Input label="Field {disabled}" defaultValue="Bilbao" disabled />
            <Input label="Field {hint}" defaultValue="Bilbao" hint="Example of hint" />
            <Input label="Field {error}" defaultValue="Bilbao" error="Example of error" />
            <Switch value={formSwitch} onValueChange={value => this.setState({ formSwitch: value })} />
            <Switch label="Disabled" />
          </View>

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

          <Text style={styles.title}>ProgressBar</Text>
          <View style={[STYLE.SHADOW, styles.content]}>
            <Text>indeterminate</Text>
            <ProgressBar indeterminate />
            <Text>valued</Text>
            <ProgressBar progress={0.33} />
          </View>
        </Content>

        <Dialog visible={dialog} onClose={_onDialog} onSubmit={_onDialog} title="Example of dialog">
          <Text>{LIPSUM}</Text>
          <View>
            <Input label="Username" />
            <Input label="Password" secureTextEntry />
          </View>
        </Dialog>
      </View>
    );
  }
}

export default Storybook;
