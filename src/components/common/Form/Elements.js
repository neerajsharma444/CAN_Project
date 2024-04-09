import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Elements.Styles';

const Elements = ({fields, onSubmit}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <>
      {fields.map(field => (
        <View key={field.name}>
          <Text style={styles.inputLabel}>{field.label}</Text>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChangeText={value => handleChange(field.name, value)}
          />
        </View>
      ))}
    </>
  );
};

export default Elements;
