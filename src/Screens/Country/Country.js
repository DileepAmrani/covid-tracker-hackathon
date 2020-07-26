import React from 'react';
import {StyleSheet, View, Text, Picker, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import Chart from '../../Components/Chart/Chart';
class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCases: 0,
      confrimCases: 0,
      totalRecovered: 0,
      totalDeaths: 0,
      selectedValue: 'Afghanistan',
      country: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegowina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Congo, the Democratic Republic of the',
        'Cook Islands',
        'Costa Rica',
        "Cote d'Ivoire",
        'Croatia (Hrvatska)',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands (Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'France Metropolitan',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard and Mc Donald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran (Islamic Republic of)',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        "Korea, Democratic People's Republic of",
        'Korea, Republic of',
        'Kuwait',
        'Kyrgyzstan',
        "Lao, People's Democratic Republic",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libyan Arab Jamahiriya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia, The Former Yugoslav Republic of',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia, Federated States of',
        'Moldova, Republic of',
        'Monaco',
        'Mongolia',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russian Federation',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia (Slovak Republic)',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'Spain',
        'Sri Lanka',
        'St. Helena',
        'St. Pierre and Miquelon',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen Islands',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan, Province of China',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'United States Minor Outlying Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Virgin Islands (British)',
        'Virgin Islands (U.S.)',
        'Wallis and Futuna Islands',
        'Western Sahara',
        'Yemen',
        'Yugoslavia',
        'Zambia',
        'Zimbabwe',
      ],
    };
  }
  componentDidMount = async () => {
    await fetch(`https://covid19.mathdro.id/api/countries/Afghanistan`, {
      method: 'GET',
    })
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
  select = async (itemValue) => {
    await fetch(`https://covid19.mathdro.id/api/countries/${itemValue}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confrimCases: json.confirmed.value,
          totalRecovered: json.recovered.value,
          totalDeaths: json.deaths.value,
        });
      })
      .catch((err) => console.log('new error', err));
  };

  render() {
    let {selectedValue} = this.state;
    return (
      <View style={styles._container}>
        <View style={styles._picker}>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            style={{
              width: screenWidth - 40,
              borderWidth: 1,
              borderColor: 'red',
              borderWidth: 1,
            }}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({selectedValue: itemValue});
              this.select(itemValue);
            }}>
            {this.state.country.map((val, i) => (
              <Picker.Item label={val} value={val} key={i} />
            ))}
          </Picker>
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

        <Chart graphData={this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
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
  _picker: {
    borderColor: 'grey',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
});
export default Country;
