import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Questions.Styles';

const Questions = () => {
  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Have Questions</Text>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Category</Text>
            <TextInput
              placeholder="Enter your current password"
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Questions</Text>
            <TextInput
              placeholder="Type your questions"
              style={styles.textInput}
            />
          </View>
          <Text style={styles.helpText}>
            If you have already asked similar question in the past please wait
            for others to send in their response instead of asking it again.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Questions;
