
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ScrollRow from './ScrollRow';
function Nav() {
  return (
    <View>
      <View style={styles.nav}>
        <AntDesign name="arrowleft" style={styles.icon} />
          <Text style={styles.text}>Recent Jobs</Text>
          <View style={styles.options}>
          <AntDesign name="search1" style={styles.icon1}/>
          </View>
      </View>
      <ScrollRow/>
    </View>
  );
}
const styles = StyleSheet.create({
nav:{
  marginTop:55,
  flexDirection:'row',
},
icon:{
  marginLeft:12,
  fontSize:25,
  padding:4,
},
options:{
  flex: 1, backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
},
icon1:{
  alignSelf:'flex-end',
  textAlign: 'right',
  fontSize:30,
  marginRight:14,
},
text:{
  fontWeight:'bold',
  marginLeft:20,
  fontSize:30,
  padding:0,
},
});
export default Nav
