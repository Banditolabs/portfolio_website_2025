import { useNavigation, Link, Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Collapsible } from "@/components/Collapsible";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ProjectFrame } from "@/components/ProjectFrame";
import { ThemedEmailForm } from "@/components/ThemedEmailForm";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const [count, setCount] = useState(0);

  const placeholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus arcu nec libero accumsan elementum. Proin at porttitor odio, at faucibus libero. Aenean pretium, dolor eu commodo posuere, lorem erat egestas felis, nec gravida felis purus sit amet purus. Nam id scelerisque magna. Nullam et erat sit amet metus tempus dapibus. Quisque non tincidunt justo. Sed pellentesque nunc ac mi faucibus, in dictum urna vulputate. Ut eget nunc a lacus volutpat fermentum. Nulla elit diam, mollis nec aliquet eget, vestibulum quis leo. Sed pulvinar aliquam elit quis feugiat. Maecenas nec imperdiet sem. Phasellus ut enim volutpat sem faucibus blandFusce justo mauris, varius vel lorem quis, sollicitudin auctor sem. Quisque ornare elit sit amet justo tempor ornare. Donec tristique, ipsum id varius sagittis, dolor ante congue nisl, ut varius tellus lectus sit amet libero. Suspendisse potenti. In sed hendrerit leo, quis iaculis elit. Ut varius elementum enim, ac porta nibh aliquet vel. Aenean congue imperdiet neque, quis malesuada augue condimentum sit amet.    Nulla nibh magna, mattis a rutrum eu, gravida sit amet mi. Vivamus tristique ipsum sed urna varius blandit. Phasellus sagittis, felis ac aliquam scelerisque, neque ex laoreet augue, vel ullamcorper diam neque eget eros. Maecenas ante diam, semper id dolor eu, congue molestie massa. Donec ut aliquam erat. Nunc egestas convallis magna, aliquet posuere ex malesuada vel. Vivamus eros nisl, viverra in felis eget, fringilla aliquet augue.    Quisque pellentesque, ante vel aliquam viverra, urna magna tincidunt dolor, ut sagittis velit dolor ac risus. Aliquam at enim cursus, pellentesque tellus vitae, finibus dolor. Fusce finibus velit enim, pretium ultrices odio laoreet et. Aenean sodales tortor enim, quis fringilla lectus pretium sed. Etiam ligula urna, ultrices eget faucibus eget, porttitor eget lacus. Sed quis ante a augue malesuada pulvinar at ac neque. Ut rutrum, risus sit amet congue efficitur, sapien ipsum dapibus mi, eget scelerisque arcu dui placerat arcu. Nulla varius ex sit amet nisi hendrerit, at placerat lectus eleifend. Mauris diam ligula, elementum eget tellus vel, semper venenatis sem. Duis sed erat maximus, laoreet mi nec, eleifend elit.   Vivamus maximus nec ante at ultrices. Vivamus luctus risus volutpat magna consectetur, ut luctus massa pretium. Quisque a nulla neque. Etiam eros lectus, sagittis luctus auctor sit amet, aliquam id urna. Praesent posuere, velit ac ullamcorper efficitur, leo augue placerat eros, sit amet dictum dui mi dignissim lectus. Aenean ac augue laoreet, pulvinar arcu eget, faucibus velit. Vestibulum fermentum id metus at blandit. Maecenas ut orci at massa feugiat mattis. Integer molestie est erat, sed imperdiet orci ultricies faucibus.";
  const projectData = [
    {
      project: {},
    },
  ];
  const skillData = [
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/javascript.svg")}
          alt="javascript-logo"
        />
      ),
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/mysql.svg")}
          alt="mysql-logo"
        />
      ),
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/postgresql.svg")}
          alt="postgresql-logo"
        />
      ),
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/rails.svg")}
          alt="rails-logo"
        />
      ),
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/react.svg")}
          alt="react-logo"
        />
      ),
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/typescript.svg")}
          alt="typescript-logo"
        />
      ),
    },
  ];
  type Item = { icon: Image };
  type ItemProps = { item: Item };

  const Item = ({ item }: ItemProps) => {
    return <View style={styles.item}>{item.icon}</View>;
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: (props) => false,
            headerRight: () => (
              <Link style={styles.blogHeaderOption} href={{ pathname: "blog" }}>
                <Button title="Blog" />
              </Link>
            ),
          }}
        />
        <ThemedView style={[sectionStyles.centering, styles.introduction]}>
          <ImageBackground
            source={require("@/assets/images/dark-background.jpg")}
            resizeMode="cover"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={sectionStyles.centering}>
              <ThemedText type={"hero"} style={[sectionStyles.margin]}>
                Joshua
              </ThemedText>
              <ThemedText type={"hero"} style={[sectionStyles.margin]}>
                Goss
              </ThemedText>
            </View>
            <ThemedText type={"subtitle"} style={[sectionStyles.margin]}>
              Software Engineer | FullStack
            </ThemedText>
          </ImageBackground>
        </ThemedView>
        <ThemedView style={[sectionStyles.centering, styles.experience]}>
          <ThemedView>
            <ThemedText type="title" style={[sectionStyles.margin]}>
              Experience
            </ThemedText>
            <ThemedView>
              <Collapsible title={"Software Engineer-Kajabi"}>
                <ThemedText type="default">Software Engineer Kajabi</ThemedText>
              </Collapsible>
            </ThemedView>
            <ThemedView>
              <Collapsible title={"Technical Support Lead Kajabi"}>
                <ThemedText type="default">
                  Technical Support Lead Kajabi
                </ThemedText>
              </Collapsible>
            </ThemedView>
            <ThemedView>
              <Collapsible title={"Technical Support Agent Kajabi"}>
                <ThemedText type="default">
                  Technical Support Agent Kajabi
                </ThemedText>
              </Collapsible>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={[sectionStyles.centering, styles.skills]}>
          <ThemedText type="title" style={[sectionStyles.margin]}>
            {" "}
            Skills{" "}
          </ThemedText>
          <FlatList
            data={skillData}
            renderItem={Item}
            numColumns={3}
            keyExtractor={(item) => item.alt}
          />
        </ThemedView>
        <ThemedView style={[sectionStyles.centering, styles.work]}>
          <ThemedText type="title" style={[sectionStyles.margin]}>
            Work
          </ThemedText>
          <View>
            <ProjectFrame
              text={"Testing"}
              image_source={"@/assets/images/rails.svg"}
            />
          </View>
        </ThemedView>
        <ThemedView style={[sectionStyles.centering, styles.contact_me]}>
          <ThemedText type="title" style={[sectionStyles.margin]}>
            Contact Me
          </ThemedText>
          <ThemedEmailForm />
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

const sectionStyles = StyleSheet.create({
  centering: {
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },
  margin: {
    margin: 20,
  },
  titleContainer: {},
});
const styles = StyleSheet.create({
  screen: {
    overflow: "scroll",
    backgroundColor: "#1f1B24",
  },
  image: {
    width: 50,
    height: 50,
  },
  blogHeaderOption: {
    marginRight: 20,
  },
  introduction: {
    height: "85%",
  },
  experience: {
    height: "50%",
  },
  skills: {
    height: "50%",
  },
  work: {
    height: "50%",
  },
  contact_me: {
    height: "50%",
  },
  item: {
    flex: 1,
    maxWidth: "33%",
    padding: 30,
  },
});
