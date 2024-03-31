import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useLazyForumQuestionsQuery} from '@redux/services/forumService';
import Header from '@components/common/Header/Header';
import styles from './Details.Styles';
import {useSelector} from 'react-redux';

const Details = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const forumData = useSelector(state => state.forum?.category);
  const [loading, setLoading] = useState(true);

  const [data] = useLazyForumQuestionsQuery();

  const fetchQuestions = async () => {
    try {
      const response = await data(forumData._id).unwrap();
      if (response.status) {
        const forumQuestions = response.result;
        setLoading(false);
        console.log('FORUM QUESTIONS', forumQuestions);
        setQuestions(forumQuestions);
      } else {
        setLoading(false);
        console.log('Error fetching Questions:', response.message);
      }
    } catch (err) {
      setLoading(false);
      console.log('Error fetching Questions:', err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const renderQuestionItem = (question, index) => (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={() => handleAnswers(question)}>
        <Text style={styles.question}>{question.quetion}</Text>
        {question.answer ? (
          <Text style={styles.answer}>{question.answer}</Text>
        ) : (
          <Text style={styles.addAnswer}>Add an Answer</Text>
        )}
      </TouchableOpacity>
    </View>
  );

  const handleAnswers = question => {
    navigation.navigate('Answers', {question});
  };

  const handleQuestions = () => {
    navigation.navigate('Questions');
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <>
              <View style={styles.subContainer}>
                <Text style={styles.heading}>{forumData.category_name}</Text>
                {questions.map((question, index) =>
                  renderQuestionItem(question, index),
                )}
                <View style={styles.queryContainer}>
                  <TouchableOpacity onPress={handleQuestions}>
                    <Text style={styles.queryText}>Have any Questions?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
