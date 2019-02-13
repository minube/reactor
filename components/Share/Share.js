import { func, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { ENV } from '../../common';
import Button from '../Button';
import Dialog from '../Dialog';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './Share.style';

const { IS_WEB } = ENV;
const shareNative = IS_WEB ? undefined : require('react-native').Share.share;

const OPTIONS = [
  { icon: 'facebook', title: 'Facebook', uri: 'https://www.facebook.com/sharer/sharer.php?u=' },
  { icon: 'twitter', title: 'Twitter', uri: 'http://www.twitter.com/share?url=' },
  { icon: 'email', title: 'Email', uri: 'mailto:?&body=' },
  { icon: 'linkedin', title: 'Linkedin', uri: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
  { icon: 'google', title: 'Google Plus', uri: 'https://plus.google.com/share?url=' },
];

class Share extends PureComponent {
  static propTypes = {
    caption: string,
    onCancel: func,
    onOption: func,
    onPress: func,
    optionColor: string,
    title: string,
    uri: string.isRequired,
  };

  static defaultProps = {
    caption: undefined,
    onCancel() {},
    onOption() {},
    onPress() {},
    optionColor: undefined,
    title: 'Share',
  };

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  _onCancel = () => {
    const { props: { onCancel } } = this;

    this.setState({ visible: false });
    onCancel();
  }

  _onOption = (baseUri) => {
    const { props: { onOption, uri } } = this;
    window.open(`${baseUri}${uri}`, '_target');
    onOption();
  }

  _onPress = () => {
    const {
      props: {
        caption, onPress, title, uri,
      },
    } = this;

    if (IS_WEB) {
      this.setState({ visible: true });
    } else {
      shareNative({ url: uri, title, message: caption });
    }
    onPress();
  }

  render() {
    const {
      _onCancel, _onOption, _onPress,
      props: { caption, optionColor, ...inherit },
      state: { visible },
    } = this;

    return (
      <View pointerEvents="auto">
        <Button {...inherit} icon="shareContrast" onPress={_onPress} />
        { IS_WEB
          && (
          <Dialog
            title={inherit.title}
            visible={visible}
            onClose={_onCancel}
            style={styles.dialog}
          >
            <Text lighten level={2}>
              {caption}
            </Text>
            <View style={styles.options}>
              { OPTIONS.map(({ title, icon, uri }) => (
                <Touchable key={title} onPress={() => _onOption(uri)} style={styles.option}>
                  <Icon value={icon} style={styles.icon} />
                  <Text color={optionColor}>
                    {title}
                  </Text>
                </Touchable>))}
            </View>
          </Dialog>
          ) }
      </View>
    );
  }
}
export default Share;
