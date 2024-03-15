import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '@components/common/Header/Header';
import styles from './Details.Styles';
import {fetchQuestionsByCategory} from '@utils/services/api';

const Details = ({navigation, route}) => {
  const [questions, setQuestions] = useState([]);
  const token = useSelector(state => state.user?.Token);
  const categoryId = route.params?.categoryId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Token:', token);
        console.log('Category ID:', categoryId);
        if (token && categoryId) {
          const questionsData = await fetchQuestionsByCategory(
            categoryId,
            token,
          );
          setQuestions(questionsData);
        }
      } catch (error) {
        console.log('Error:', error);
        Alert.alert('Error', error.message);
      }
    };
    fetchData();
  }, [categoryId, token]);

  const renderQuestionItem = ({item}) => (
    <View>
      <Text style={styles.heading}>{item.select_category}</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleAnswers}>
          <Text style={styles.question}>{item.quetion}</Text>
          {item.answer ? (
            <Text style={styles.answer}>{item.answer}</Text>
          ) : (
            <Text style={styles.addAnswer}>Add an Answer</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleAnswers = () => {
    navigation.navigate('Answers');
  };
  const handleQuestions = () => {
    navigation.navigate('Questions');
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <View style={styles.detailList}>
          <FlatList
            data={questions}
            renderItem={renderQuestionItem}
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
