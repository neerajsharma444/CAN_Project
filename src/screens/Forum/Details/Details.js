import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useLazyForumQuestionsQuery} from '@redux/services/authService';
import Header from '@components/common/Header/Header';
import styles from './Details.Styles';
import {useSelector} from 'react-redux';

const Details = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const categoryId = useSelector(state => state.forum?.category?._id);
  console.log('CATEGORY_IDDD', categoryId);

  const [data] = useLazyForumQuestionsQuery();

  const fetchQuestions = async () => {
    try {
      const response = await data(categoryId).unwrap();
      if (response.status) {
        const forumQuestions = response.result;
        console.log('FORUM QUESTIONS', forumQuestions);
        setQuestions(forumQuestions);
      } else {
        console.log('Error fetching Questions:', response.message);
      }
    } catch (err) {
      console.log('Error fetching Questions:', err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

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
      {/* <Text style={styles.heading}>{item.select_category}</Text> */}
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
