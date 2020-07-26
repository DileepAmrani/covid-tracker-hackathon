import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class About extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._titleBox}>
          <Text style={styles._title}>ABOUT COVID-19</Text>
        </View>
        <Text style={styles._description}>
          Coronaviruses (CoV) are a large family of viruses that cause illness
          ranging from the common cold to more severe diseases such as Middle
          East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory
          Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that
          has not been previously identified in humans.
        </Text>
        <Text style={styles._description}>
          Coronaviruses are zoonotic, meaning they are transmitted between
          animals and people. Detailed investigations found that SARS-CoV was
          transmitted from civet cats to humans and MERS-CoV from dromedary
          camels to humans. Several known coronaviruses are circulating in
          animals that have not yet infected humans.
        </Text>
        <Text style={styles._description}>
          Common signs of infection include respiratory symptoms, fever, cough,
          shortness of breath and breathing difficulties. In more severe cases,
          infection can cause pneumonia, severe acute respiratory syndrome,
          kidney failure and even death.
        </Text>
        <Text style={styles._description}>
          Standard recommendations to prevent infection spread include regular
          hand washing, covering mouth and nose when coughing and sneezing,
          thoroughly cooking meat and eggs. Avoid close contact with anyone
          showing symptoms of respiratory illness such as coughing and sneezing.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 8,
  },
  _titleBox: {
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 2,
    backgroundColor: '#B2B1B1',
  },
  _title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  _description: {
    padding: 5,
    fontSize: 16,
    textAlign: 'justify',
    color: '#4f4e4d',
  },
});

export default About;
