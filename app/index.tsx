import { useNavigation, Link, Stack } from "expo-router";
import * as NavigationBar from 'expo-navigation-bar';
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import { FlatList, ScrollView } from "react-native-gesture-handler";

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Index() {
  const [count, setCount] = useState(0);

  const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu nec libero accumsan elementum. Proin at porttitor odio, at faucibus libero. Aenean pretium, dolor eu commodo posuere, lorem erat egestas felis, nec gravida felis purus sit amet purus. Nam id scelerisque magna. Nullam et erat sit amet metus tempus dapibus. Quisque non tincidunt justo. Sed pellentesque nunc ac mi faucibus, in dictum urna vulputate. Ut eget nunc a lacus volutpat fermentum. Nulla elit diam, mollis nec aliquet eget, vestibulum quis leo. Sed pulvinar aliquam elit quis feugiat. Maecenas nec imperdiet sem. Phasellus ut enim volutpat sem faucibus blandFusce justo mauris, varius vel lorem quis, sollicitudin auctor sem. Quisque ornare elit sit amet justo tempor ornare. Donec tristique, ipsum id varius sagittis, dolor ante congue nisl, ut varius tellus lectus sit amet libero. Suspendisse potenti. In sed hendrerit leo, quis iaculis elit. Ut varius elementum enim, ac porta nibh aliquet vel. Aenean congue imperdiet neque, quis malesuada augue condimentum sit amet.    Nulla nibh magna, mattis a rutrum eu, gravida sit amet mi. Vivamus tristique ipsum sed urna varius blandit. Phasellus sagittis, felis ac aliquam scelerisque, neque ex laoreet augue, vel ullamcorper diam neque eget eros. Maecenas ante diam, semper id dolor eu, congue molestie massa. Donec ut aliquam erat. Nunc egestas convallis magna, aliquet posuere ex malesuada vel. Vivamus eros nisl, viverra in felis eget, fringilla aliquet augue.    Quisque pellentesque, ante vel aliquam viverra, urna magna tincidunt dolor, ut sagittis velit dolor ac risus. Aliquam at enim cursus, pellentesque tellus vitae, finibus dolor. Fusce finibus velit enim, pretium ultrices odio laoreet et. Aenean sodales tortor enim, quis fringilla lectus pretium sed. Etiam ligula urna, ultrices eget faucibus eget, porttitor eget lacus. Sed quis ante a augue malesuada pulvinar at ac neque. Ut rutrum, risus sit amet congue efficitur, sapien ipsum dapibus mi, eget scelerisque arcu dui placerat arcu. Nulla varius ex sit amet nisi hendrerit, at placerat lectus eleifend. Mauris diam ligula, elementum eget tellus vel, semper venenatis sem. Duis sed erat maximus, laoreet mi nec, eleifend elit.   Vivamus maximus nec ante at ultrices. Vivamus luctus risus volutpat magna consectetur, ut luctus massa pretium. Quisque a nulla neque. Etiam eros lectus, sagittis luctus auctor sit amet, aliquam id urna. Praesent posuere, velit ac ullamcorper efficitur, leo augue placerat eros, sit amet dictum dui mi dignissim lectus. Aenean ac augue laoreet, pulvinar arcu eget, faucibus velit. Vestibulum fermentum id metus at blandit. Maecenas ut orci at massa feugiat mattis. Integer molestie est erat, sed imperdiet orci ultricies faucibus.";
  // Add static images
  const SKILLS = [
    id: 1,
    img: 'img',
    title: ''
  ]
  type Itemprops = {image_path: string, title: string} 
  const Item = ({image_path, title}: Itemprops) => (
    <View>
      <Image source={require(image_path)}/>
    <Text>{title}</Text>
  </View>
  )

  return (
    <ScrollView>

    <SafeAreaView
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >

      <Stack.Screen
        options={{
          headerTitle: props => false,
          headerRight: () => <Link style={styles.blogHeaderOption} href={{ pathname: 'blog'}}><Button title="Blog" /></Link>,
        }}
      />
          <View style={styles.introduction}>
            <Text>Joshua Goss</Text>
            <Text>Software Engineer | FullStack</Text>
            {/* <Text>{placeholder}</Text> */}
          </View>
          <View style={{height: '50%'}}>
            <Text>Experience</Text>
            <View>Software Engineer Kajabi</View>
            <View>Technical Support Lead Kajabi</View>
            <View>Technical Support Agent Kajabi</View>
          </View>
          <View style={{height: '50%'}}>
            <Text> Skills </Text>
            <FlatList
            data={SKILLS}
            renderItems={({item}) => <Item title={} image={}/>}
            />
          </View>
          <View style={{height: '50%'}}>
            <Text>Work</Text>
          </View>
          <View style={{height: '100%'}}>
            <Text>Contact Me</Text>
          </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    overflow: "scroll"
  },
  image: {
    width: 50,
    height: 50,
  },
  blogHeaderOption: {
    marginRight: 20
  },
  introduction: {
    justifyContent: "felx-start",
    alignItems: "center",
    height: '100%'
  },
  experience: {

  },
  skills: {

  },
  work: {

  },
  contact_me: {

  }

  // section: {
  //   flex: 1,
  //   justifyContent: "felx-start",
  //   alignItems: "center",
  // },
});
