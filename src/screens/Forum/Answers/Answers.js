import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Answers.Styles';
import Button from '@components/common/Button/Button';

const Answers = ({navigation}) => {
  const [doubleButton, setdoubleButton] = useState(true);
  const handlePost = () => {
    navigation.navigate('Details');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.questionText}>Category: Valuations & MRR</Text>
        <Text style={styles.helpButton}>What exactly is MRR?</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputLabelText}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              placeholderTextColor="#00000045"
              multiline={true}
              style={styles.textInput}
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
