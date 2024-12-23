import { useNavigation, Link, Stack } from "expo-router";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Blog() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Stack.Screen
        options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => 
            <> 
                <Link href={{ pathname: '/'}}><Button title="Home" /></Link> 
                <Link href={{ pathname: 'home'}}><Button title="Home" /></Link>
            </>, 
        }}
        />
        <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
    },
  });