import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.Styles';

const Card = ({
  name,
  description,
  logo,
  amountLabel,
  amount,
  roundSizeLabel,
  roundSize,
  valuationLabel,
  valuation,
  investmentLabel,
  investment,
  investmentDateLabel,
  investmentDate,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <Image source={{uri: logo}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardText}>{description}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardDetails}>
          {amountLabel} <Text style={styles.text}>{amount}</Text>
        </Text>
        <Text style={styles.cardDetails}>
          {roundSizeLabel}
          <Text style={styles.text}> {roundSize}</Text>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardDetails}>
          {valuationLabel} <Text style={styles.text}> {valuation}</Text>
        </Text>
        <Text style={styles.cardDetails}>
          {investmentLabel}
          <Text style={styles.text}> {investment}</Text>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardDetails}>
          {investmentDateLabel}
          <Text style={styles.text}> {investmentDate}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Card;
