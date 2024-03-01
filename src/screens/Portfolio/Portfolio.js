import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import IMAGES from '@assets/images';
import {verticalScale} from '@utils/Metrics';
import styles from './Portfolio.Styles';

const Portfolio = () => {
  const data = [
    {
      name: 'Jerry Imfotech',
      description: 'On demand food delivery startup',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
    {
      name: 'Chaiwala',
      description: 'Authentic Indian Tea',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
    {
      name: 'Jerry Imfotech',
      description: 'On demand food delivery startup',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
  ];

  const renderCardItem = ({item}) => (
    <Card
      name={item.name}
      description={item.description}
      MRP={item.MRP}
      Round_Size={item.Round_Size}
      Valuation={item.Valuation}
      Commitment={item.Commitment}
      image={item.image}
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
