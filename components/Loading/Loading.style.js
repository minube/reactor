import {StyleSheet} from 'react-native';

import {THEME} from '../../common';

const {COLOR, UNIT} = THEME;

export default StyleSheet.create({
    default: {
        width: '110px',
        height: '110px',
        borderWidth: '10px',
        borderColor: COLOR.DISABLED,
        borderStyle: 'solid',
        borderTopColor: COLOR.PRIMARY,
        borderRadius: '50%',
    }
});
