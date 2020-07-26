import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Chart from "../../Components/Chart/Chart"

class Global extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCases: '5',
      confrimCases: '6',
      totalRecovered: '8',
      totalDeaths: '2',
    };
  }

  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api', {method: 'GET'})
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confrimCases: json.confirmed.value,
          totalRecovered: json.recovered.value,
          totalDeaths: json.deaths.value,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };

  render() {
    return (
      <View style={styles._container}>
          <View style={styles._headingBox}>
              <Text style={styles._title} >GlOBAL COVID-19 DATA</Text>
          </View>
        <View style={styles._boxes}>
          <View style={[styles._box, styles._boxOne]}>
            <Text style={styles._title}>TOTAL CASES</Text>
            <Text style={styles._value}>{this.state.confrimCases}</Text>
          </View>
        </View>
        <View style={styles._boxes}>
          <View style={[styles._box, styles._boxThree]}>
            <Text style={styles._title}>TOTAL RECOVERED</Text>
            <Text style={styles._value}>{this.state.totalRecovered}</Text>
          </View>
          <View style={[styles._box, styles._boxFour]}>
            <Text style={styles._title}>TOTAL DEATHS</Text>
            <Text style={styles._value}>{this.state.totalDeaths}</Text>
          </View>
        </View>
        <Chart graphData={this.state}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  _headingBox:{
    backgroundColor: '#E9E7E7',
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 2,
  },
  _boxes: {
    display: 'flex',
    flexDirection: 'row',
  },
  _box: {
    flex: 1,
    height: 150,
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 2,
  },
  _boxOne: {
    backgroundColor: '#7B7979',
  },
  _boxTwo: {
    backgroundColor: 'blue',
  },
  _boxThree: {
    backgroundColor: '#269954',
  },
  _boxFour: {
    backgroundColor: '#99264D',
  },
  _title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  _value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
});
export default Global;
