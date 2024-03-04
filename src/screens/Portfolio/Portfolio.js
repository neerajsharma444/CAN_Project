import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import styles from './Portfolio.Styles';

const Portfolio = () => {
  const data = [
    {
      name: 'Jerry Infotech',
      text: 'On demand food delivery startup',
      amount: 'INR 3.50 lakhs',
      shares: 1.345,
      valuation: 'INR 3.5 Cr',
      roundSize: 'INR 50 lakhs',
      investment: '12/10/22',
      type: 'card',
    },
    {
      name: 'XYC Inc',
      text: 'Authentic Indian Tea',
      amount: 'INR 3.50 lakhs',
      shares: 1.279,
      valuation: 'INR 3.5 Cr',
      roundSize: 'INR 20 lakhs',
      investment: '12/10/22',
      type: 'card',
    },
    {
      name: 'ABC Inc',
      text: 'Robotics, drones',
      amount: 'INR 4.50 lakhs',
      shares: 435,
      valuation: 'INR 5 Cr',
      roundSize: 'INR 50 lakhs',
      investment: '12/10/22',
      type: 'card',
    },
  ];

  const renderCardItem = ({item}) => (
    <Card
      name={item.name}
      description={item.text}
      amountLabel="Amount: "
      amount={item.amount}
      roundSizeLabel="# of Shares: "
      roundSize={item.shares}
      valuationLabel="At Valuation: "
      valuation={item.valuation}
      investmentLabel="Round Size: "
      investment={item.roundSize}
      investmentDateLabel="Date of Investment: "
      investmentDate={item.investment}
    />
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>My Portfolio</Text>
        <FlatList
          data={data}
          renderItem={renderCardItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Portfolio;
