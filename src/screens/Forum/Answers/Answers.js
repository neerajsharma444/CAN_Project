import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Answers.Styles';
import Button from '@components/common/Button/Button';
import {useAddAnswerMutation} from '@redux/services/forumService';
import {useDispatch, useSelector} from 'react-redux';
import {globalState} from '@redux/slices/forumSlice';

const Answers = ({navigation}) => {
  const [doubleButton, setdoubleButton] = useState(true);
  const [response, setResponse] = useState('');
  const quesData = useSelector(state => state?.forum.questionData);
  // console.log('QUESTION DATA ===>', quesData);
  const userData = useSelector(state => state.auth?.user.result);
  // console.log('USER DATA===>', userData);

  const newGlobalState = useSelector(state => state?.forum?.globalState);
  console.log('NEW GLOBAL STATE===>', newGlobalState);

  const dispatch = useDispatch();
  const [addAnswerMutation] = useAddAnswerMutation();

  const params = {
    _id: quesData?._id,
    select_category: quesData?.select_category,
    quetion: quesData?.quetion,
    status: 'active',
    answerd: 'yes',
    answerd_by: userData?.name,
    answer: response,
  };

  const handlePost = async () => {
    try {
      const response = await addAnswerMutation(params);
      console.log('Response===>', response);
      if (response.data.status) {
        dispatch(globalState(!newGlobalState));
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
        <Text style={styles.questionText}>
          Category: {quesData?.select_category}
        </Text>
        <Text style={styles.helpButton}>{quesData?.quetion}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputLabelText}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              placeholderTextColor="#00000045"
              multiline={true}
              style={styles.textInput}
              onChangeText={text => setResponse(text)}
            />
          </View>

          <Text style={styles.helpText}>
            Please be polite while answering the question. Refer to community
            guidelines for more info.
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

export default Answers;
