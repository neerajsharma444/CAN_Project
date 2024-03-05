import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '@components/common/Header/Header';
import styles from './Details.Styles';

const Details = ({navigation}) => {
  const handleAnswers = () => {
    navigation.navigate('Answers');
  };

  const handleQuestions = () => {
    navigation.navigate('Questions');
  };

  const detailsData = [
    {
      ques: 'Who is evaluating the initial valuations?',
      ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      ques: 'What is MRR?',
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

  const renderDetailsData = ({item}) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAnswers}>
        <Text style={styles.question}>{item.ques}</Text>
        {item.ans ? (
          <Text style={styles.answer}>{item.ans}</Text>
        ) : (
          <Text style={styles.addAnswer}>Add an Answer</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Valuations & MRR</Text>
        <View style={styles.detailList}>
          <FlatList
            data={detailsData}
            renderItem={renderDetailsData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.queryContainer}>
          <TouchableOpacity onPress={handleQuestions}>
            <Text style={styles.queryText}>Have any Questions?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
