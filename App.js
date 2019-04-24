import React, { Component, Fragment } from 'react';
import { View } from 'react-native';

import {
  Button,
  Calendar,
  InputSelect,
  ListingCard,
  Motion,
  Text,
  Viewport,
  Slider,
  Share,
} from './components';

import {
  DATASOURCE, DATASOURCE_STRING, ERROR, HINT, LABEL, STYLE, TEMPLATE,
} from './components/InputSelect/InputSelect.mocks';

import { THEME } from './common';
import { Consumer, Provider } from './context';

if (typeof global.self === 'undefined') global.self = global;

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line
const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." // eslint-disable-line

const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

export default class App extends Component {
  state = {
    dataSource: [...Array(16).keys()]
      .map(index => ({
        category: `Category ${index}`,
        title: `Title ${index}`,
        rating: { value: index + 1 },
        image: `https://picsum.photos/320/200?image=1${index + 1}`,
      })),
    viewport: false,
  }

  render() {
    const { state: { dataSource, viewport } } = this;

    return (
      <Provider dictionary={DICTIONARY} language="en-EN">
        <Fragment>
          <Viewport scroll style={{ padding: THEME.SPACE.REGULAR }} visible>
            <Consumer>
              { ({ l10n }) => (
                <Text>
                  {`l10n: ${l10n.GREETINGS}`}
                </Text>
              )}
            </Consumer>
            <Button title="Second viewport" onPress={() => this.setState({ viewport: true })} />
            <Calendar />
            <InputSelect dataSource={DATASOURCE} />
            <Text>
              {LIPSUM}
            </Text>
          </Viewport>

          <Viewport
            onBack={() => this.setState({ viewport: false })}
            style={{ padding: THEME.SPACE.REGULAR }}
            visible={viewport}
          >
            <Button title="Back" onPress={() => this.setState({ viewport: false })} />
            <Share uri="http://soyjavi.com" title="Share" />
            <Slider dataSource={dataSource} item={ItemListingCard} navigation={false} steps={2} />
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
          </Viewport>
        </Fragment>
      </Provider>
    );
  }
}
