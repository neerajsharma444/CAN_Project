import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Answers.Styles';

const Answers = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButtonStyle}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButtonStyle}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Answers;
