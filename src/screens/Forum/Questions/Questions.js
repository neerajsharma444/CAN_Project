import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Questions.Styles';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '@components/common/Button/Button';
import {useAddQuestionMutation} from '@redux/services/forumService';
import {useSelector, useDispatch} from 'react-redux';

const Questions = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [doubleButton, setDoubleButton] = useState(true);
  const dispatch = useDispatch();

  const allCategories = useSelector(state => state?.forum?.allCategories);
  const categoryId = useSelector(state => state.forum?.category?._id);
  // console.log('ALL CATEGORIES===>', allCategories);

  const fetchCategoriesList = async () => {};

  useEffect(() => {
    fetchCategoriesList();
  }, []);

  const params = {
    category_id: allCategories?._id,
    select_category: category,
    quetion: question,
    status: 'active',
    answerd: 'no',
    answerd_by: 'Rakesh',
  };

  const [addQuestion] = useAddQuestionMutation();

  const handlePost = async () => {
    const data = await addQuestion(params).unwrap();
    console.log('Response===>', data);

    try {
      if (data.status) {
        // dispatch(loginSuccess(data));
        console.log('Success, response:', data);
        navigation.navigate('Details');
        return {success: true};
      } else {
        Alert.alert(data.message);
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Error during login:', error);
      return {success: false, error: 'An error occurred during login'};
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
              placeholder="Select Category"
              labelField="category_name"
              valueField="_id"
              onChange={item => setCategory(item.state)}
              style={styles.dropdown}
              value={category}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Question</Text>
            <TextInput
              placeholder="Type your question"
              style={styles.textInput}
              onChangeText={text => setQuestion}
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
