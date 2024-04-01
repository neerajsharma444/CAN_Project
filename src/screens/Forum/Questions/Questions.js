import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Questions.Styles';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '@components/common/Button/Button';
import {useAddQuestionMutation} from '@redux/services/forumService';
import {useSelector} from 'react-redux';

const Questions = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoryData?.category_name,
  );
  const [question, setQuestion] = useState('');
  const [doubleButton, setDoubleButton] = useState(true);

  const allCategories = useSelector(state => state?.forum?.allCategories);
  const categoryData = useSelector(state => state?.forum.category);
  const userData = useSelector(state => state.auth?.user.result);
  // console.log('ALL CATEGORIES===>', allCategories);
  console.log('CATEGORY DATA===>', categoryData);

  const fetchCategoriesList = async () => {};

  useEffect(() => {
    fetchCategoriesList();
  }, []);

  const params = {
    category_id: categoryData?._id,
    select_category: categoryData?.category_name,
    quetion: question,
    status: 'active',
    answerd: 'no',
    answerd_by: userData.name,
  };

  const [addQuestion] = useAddQuestionMutation();

  const handlePost = async () => {
    console.log('PARAMS==>', params);
    try {
      const response = await addQuestion(params);
      console.log('Response', response);
      if (response.data.status) {
        navigation.navigate('Details');
      }
    } catch (err) {
      console.log('ERROR==>', err);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Have Questions</Text>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Category</Text>
            <Dropdown
              data={allCategories}
              labelField="category_name"
              valueField="_id"
              onChange={item => setSelectedCategory(item)}
              placeholder={categoryData.category_name}
              style={styles.dropdown}
              value={categoryData.category_name}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Question</Text>
            <TextInput
              placeholder="Type your question"
              style={styles.textInput}
              onChangeText={text => setQuestion(text)}
            />
          </View>
          <Text style={styles.helpText}>
            If you have already asked a similar question in the past, please
            wait for others to send in their response instead of asking it
            again.
          </Text>
        </View>

        <Button
          buttonName="Post"
          doubleButton={doubleButton}
          onPress={handlePost}
          cancelPress={handleCancel}
        />
      </View>
    </View>
  );
};

export default Questions;
