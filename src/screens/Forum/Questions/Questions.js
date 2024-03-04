import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '@components/common/Header/Header';
import styles from './Questions.Styles';
import {Dropdown} from 'react-native-element-dropdown';

const Questions = ({navigation}) => {
  const [category, setCategory] = useState('');

  const categories = [
    {label: 'Educational', value: 'Educational'},
    {label: 'Sports', value: 'Delhi'},
    {label: 'Gaming', value: 'Gaming'},
    {label: 'Environmental', value: 'Environmental'},
    {label: 'News', value: 'News'},
  ];

  return (
    <View style={styles.mainContainer}>
      <Header drawer={false} back={true} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Have Questions</Text>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.inputLabel}>Category</Text>
            <Dropdown
              style={styles.dropdown}
              placeholder="Select"
              selectedTextStyle={{color: 'blue'}}
              data={categories}
              labelField="label"
              valueField="value"
              onChange={item => {
                setCategory(item.value);
              }}
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
