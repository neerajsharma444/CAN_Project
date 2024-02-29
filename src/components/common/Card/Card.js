import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.Styles';

const Card = ({
  name,
  image,
  description,
  MRP,
  Round_Size,
  Valuation,
  Commitment,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardText}>{description}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardDetails}>
          MRP: <Text style={styles.text}>{MRP}</Text>
        </Text>
        <Text style={styles.cardDetails}>
          Round Size:
          <Text style={styles.text}> {Round_Size}</Text>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardDetails}>
          Valuation:
          <Text style={styles.text}> {Valuation}</Text>
        </Text>
        <Text style={styles.cardDetails}>
          Commitment:
          <Text style={styles.text}> {Commitment}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Card;
