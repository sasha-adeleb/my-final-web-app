import { StyleSheet , Image, } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>some text</Text>
      <Text style={styles.title}>hello</Text>
      <Image
      style={{height:200, width:'100%'}}
source={{uri:'https://www.flickr.com'}}
      />
 <Image
      style={{height:200, width:'100%'}}
source={{uri:'http://go237.com/wp-content/uploads/2019/12/1470399671_SEO.png'}}
      />
      <View style={styles.separator} lightColor="#B0FC38" darkColor="#B0FC38" />
      <EditScreenInfo path="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
