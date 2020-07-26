import React from 'react';
import {
  PieChart,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';


const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

class Chart extends React.Component {
    
    render() {
    const data = [
        {
          name: '',
          population:Number(this.props.graphData.confrimCases),
          color: '#7B7979',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: '',
          population: Number(this.props.graphData.totalRecovered),
          color: '#269954',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: '',
          population: Number(this.props.graphData.totalDeaths),
          color: '#99264D',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      ];

    return (
      <View>
        <Text style={styles._title}>COVID GRAPH</Text>
        <View style={styles._graphBox}>
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    _graphBox:{
        borderRadius: 5,
        padding: 10,
        elevation: 1,
        shadowColor: '#000',
        backgroundColor: "#E9E7E7",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        margin: 2,
    },
    _title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4D3E3B',
        padding: 8
    }
})

export default Chart;
