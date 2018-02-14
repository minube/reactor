import { array, arrayOf, bool, func, number, oneOfType, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../common';
import Button from '../Button';
import Link from '../Link';
import PictureCard from '../PictureCard';
import Text from '../Text';
import styles from './HotelCard.style';

const { COLOR } = THEME;

const ProposalItem = ({
  hint, uri, name, price = 0 // eslint-disable-line
}) => (
  <View style={styles.proposal}>
    <View>
      <Link href="" style={styles.proposalName}>{name}</Link>
      <Text style={styles.caption}>{hint}</Text>
    </View>
    <Text style={styles.proposalPrice}>{price}$</Text>
  </View>
);

const HotelCard = ({
  comment, empty, image, location, onPress, proposals, style, title,
}) => (
  <View style={StyleSheet([styles.container, empty ? styles.empty : styles.elevation, style])}>

    <PictureCard image={image} elevation={false} />
    <View style={styles.content}>
      { title && <Text style={styles.title}>{title}</Text> }
      { location && <Text style={styles.caption}>{location}</Text> }
      { comment && <Text style={styles.comment}>{comment}</Text> }

      <View style={styles.proposals}>
        <ProposalItem name="{Hotel Name}" hint="{Incluye desayuno}" price={78} />
        <ProposalItem name="{Hotel Name}" hint="{Incluye desayuno}" price={78} />
        <ProposalItem name="{Hotel Name}" hint="{Incluye desayuno}" price={78} />
        <ProposalItem name="{Hotel Name}" hint="{Incluye desayuno}" price={78} />
      </View>
    </View>

    <View style={styles.right}>
      <Text style={styles.dealPrice}>78$</Text>
      <Text>Expedia</Text>
      <Button color={COLOR.ACCENT} title="Ver Oferta" />
    </View>
  </View>
);

HotelCard.propTypes = {
  comment: string,
  proposals: arrayOf(shape({})),
  empty: bool,
  image: string,
  location: string,
  onPress: func,
  style: oneOfType([array, number]),
  title: string,
};

HotelCard.defaultProps = {
  comment: undefined,
  proposals: [],
  empty: false,
  image: undefined,
  location: string,
  onPress: undefined,
  rating: undefined,
  style: [],
  title: undefined,
};

export default HotelCard;
