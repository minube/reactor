import { func, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Platform } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import Dialog from '../Dialog';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './Share.style';

const IS_WEB = Platform.OS === 'web';
const shareNative = IS_WEB ? undefined : require('react-native').Share.share;

const OPTIONS = [
  { icon: '', title: 'Facebook', uri: 'https://www.facebook.com/sharer/sharer.php?u=' },
  { icon: '', title: 'Twitter', uri: 'http://www.twitter.com/share?url=' },
  { icon: '', title: 'Email', uri: 'mailto:?&body=' },
  { icon: '', title: 'Linkedin', uri: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
  { icon: '', title: 'Google Plus', uri: 'https://plus.google.com/share?url=' },
];

class Share extends PureComponent {
  static propTypes = {
    caption: string,
    onCancel: func,
    onOption: func,
    onPress: func,
    title: string,
    uri: string.isRequired,
  };

  static defaultProps = {
    caption: undefined,
    onCancel() {},
    onOption() {},
    onPress() {},
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
      props: { caption, ...inherit },
      state: { visible },
    } = this;

    return (
      <View pointerEvents="auto">
        <Button {...inherit} icon="share" onPress={_onPress} />
        { IS_WEB &&
          <Dialog
            title={inherit.title}
            visible={visible}
            onClose={_onCancel}
            style={[styles.dialog, LAYOUT.STYLE.SHARE.DIALOG]}
          >
            <Text lighten small>{caption}</Text>
            <View style={styles.options}>
              { OPTIONS.map(({ title, icon, uri }) => (
                <Touchable key={title} onPress={() => _onOption(uri)} style={styles.option}>
                  <Icon value={icon} style={styles.icon} />
                  <Text primary>{title}</Text>
                </Touchable>))}
            </View>
          </Dialog> }
      </View>
    );
  }
}
export default Share;
