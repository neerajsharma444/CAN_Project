import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Header from '@components/common/Header/Header';
import styles from './Details.Styles';

const Details = () => {
  const detailData = [
    {
      ques: 'Who is evaluating the initial valuations?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is MRR?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is round size?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is commitment?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderdetailData = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.question}>{item.ques}</Text>
      <Text style={styles.answer}>{item.ans}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Valuations & MRR</Text>
        <View style={styles.detailList}>
          <FlatList
            data={detailData}
            renderItem={renderdetailData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.queryContainer}>
          <Text style={styles.queryText}>Have any Questions?</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
