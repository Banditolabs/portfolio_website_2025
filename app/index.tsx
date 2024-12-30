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
import { about } from "@/constants/About";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Collapsible } from "@/components/Collapsible";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ProjectFrame } from "@/components/ProjectFrame";
import { ThemedEmailForm } from "@/components/ThemedEmailForm";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

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
        {/* <Link style={styles.blogHeaderOption} href={{ pathname: "blog" }}>
              <Button title="Blog" />
          </Link> */}
        <ThemedView style={[{ alignItems: "center" }]}>
          <View style={[styles.bodyContainer, { maxWidth: 1280 }]}>
            <View style={[styles.bodyColumn]}>
              <Text> Name and Socials </Text>
              <ThemedView style={[styles.nameColumn]}>
                <View style={[sectionContainers.nameContainer]}>
                  <ThemedText type="title" style={[sectionContainers.nameItem]}>
                    Joshua Goss
                  </ThemedText>
                  <ThemedText
                    type="subtitle"
                    style={[sectionContainers.nameItem]}
                  >
                    Software Engineer | Fullstack
                  </ThemedText>
                  <ThemedText
                    type="default"
                    style={[sectionContainers.nameItem]}
                  >
                    I love meaningful outcomes from the code I write.
                  </ThemedText>
                </View>
                <View style={[sectionContainers.socialsContainer]}>
                  <View>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ height: 24, width: 24 }}
                    />
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ height: 24, width: 24 }}
                    />
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      style={{ height: 24, width: 24 }}
                    />
                  </View>
                </View>
              </ThemedView>
            </View>
            <View style={[styles.bodyColumn]}>
              <Text> Info </Text>
              {/* ABOUT */}
              <View style={[styles.infoColumn]}>
                <View style={[sectionContainers.aboutContainer]}>
                  <ThemedText style={[sectionContainers.aboutItem]}>
                    {about.p1}
                  </ThemedText>
                  <ThemedText
                    style={[sectionContainers.aboutItem, { color: "#94a3b8" }]}
                  >
                    {about.p2}
                  </ThemedText>
                  <ThemedText style={[sectionContainers.aboutItem]}>
                    {about.p3}
                  </ThemedText>
                  <ThemedText
                    style={[sectionContainers.aboutItem, { color: "#94a3b8" }]}
                  >
                    {about.p4}
                  </ThemedText>
                </View>
                {/* EXPERIENCE */}
                <View style={sectionContainers.experienceContainer}>
                  <View style={[sectionContainers.experienceItem]}>
                    <View style={[sectionContainers.resumeDates]}>
                      <ThemedText style={{ fontSize: 12 }}>
                        November 2022 - December 2024
                      </ThemedText>
                    </View>
                    <View style={[sectionContainers.resumeContent]}>
                      <ThemedText
                        type={"defaultSemiBold"}
                        style={{ marginBottom: 10 }}
                      >
                        Software Engineer
                      </ThemedText>
                      <ThemedText type={"subtext"}>
                        Built and maintained critical payment achitecture and
                        features for Kajabi's payment collection domain.
                        Streamlined project planning by defining development
                        processes, breaking down features into actionable tasks,
                        and providing accurate time estimates.
                      </ThemedText>
                      <View>
                        <ul
                          style={{
                            display: "flex",
                            listStyleType: "none",
                            paddingLeft: 0,
                          }}
                        >
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              Ruby
                            </ThemedText>
                          </li>
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              TypeScript
                            </ThemedText>
                          </li>
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              React
                            </ThemedText>
                          </li>
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              MySQL
                            </ThemedText>
                          </li>
                        </ul>
                      </View>
                    </View>
                  </View>
                  <View style={[sectionContainers.experienceItem]}>
                    <View style={[sectionContainers.resumeDates]}>
                      <ThemedText style={{ fontSize: 12 }}>
                        October 2020 - November 2022
                      </ThemedText>
                    </View>
                    <View style={[sectionContainers.resumeContent]}>
                      <ThemedText
                        type={"defaultSemiBold"}
                        style={{ marginBottom: 10 }}
                      >
                        Technical Support Lead
                      </ThemedText>
                      <ThemedText type={"subtext"}>
                        Used technical knowledge of Kajabi's application to
                        support as cornerstone member of Kajabi's 200 plus
                        person support structure. In addition I served as
                        liasion to the engineering team to help prioritize,
                        document and replicate bugs reported through the support
                        org.
                      </ThemedText>
                      <View>
                        <ul
                          style={{
                            display: "flex",
                            listStyleType: "none",
                            paddingLeft: 0,
                          }}
                        >
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              HTML
                            </ThemedText>
                          </li>
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              CSS
                            </ThemedText>
                          </li>
                          <li>
                            <ThemedText
                              style={sectionContainers.skillsItem}
                              type="skill"
                            >
                              JavaScript
                            </ThemedText>
                          </li>
                        </ul>
                      </View>
                    </View>
                  </View>
                  <View style={[sectionContainers.experienceItem]}>
                    <View style={[sectionContainers.resumeDates]}>
                      <ThemedText style={{ fontSize: 12 }}>
                        June 2019 - Octrober 2020
                      </ThemedText>
                    </View>
                    <View style={[sectionContainers.resumeContent]}>
                      <ThemedText
                        type={"defaultSemiBold"}
                        style={{ marginBottom: 10 }}
                      >
                        Technical Support Agent
                      </ThemedText>
                      <ThemedText type={"subtext"}>
                        Provided top quality customer support to Kajabi
                        customers. Worked to understand Kajabi's app on a deep
                        level and become a point person for peers with questions
                        and in need of collaboration.
                      </ThemedText>
                    </View>
                  </View>
                  {/* <Link href={{ href: "@/assets/documents/Resume.pdf" }}>
                    <ThemedText>Full Resume</ThemedText>
                  </Link> */}
                </View>
                <View></View>
              </View>
            </View>
          </View>
        </ThemedView>
        {/* <ThemedView style={[sectionStyles.centering, styles.introduction]}>
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
              <ThemedText type={"hero"} style={[]}>
                Goss
              </ThemedText>
            </View>
            <ThemedText type={"subtitle"} style={[sectionStyles.margin]}>
              Software Engineer | FullStack
            </ThemedText>
          </ImageBackground>
        </ThemedView>
        <ThemedView style={[styles.experience]}>
          <View style={[sectionStyles.titleContainer]}>
            <ThemedText type="title" style={[sectionStyles.margin]}>
              Experience
            </ThemedText>
          </View>
          <ThemedView style={[]}>
            <View style={[]}>
              <Collapsible title={"Software Engineer-Kajabi"}>
                <ThemedText type="default">Software Engineer Kajabi</ThemedText>
              </Collapsible>
            </View>
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
          </View>
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
        </ThemedView> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bodyColumn: {
    width: "50%",
  },
  infoColumn: {
    marginRight: 30,
  },
  nameColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    paddingLeft: "20%",
  },
});

const sectionContainers = StyleSheet.create({
  nameContainer: {
    width: "100%",
    marginBottom: 40,
  },
  nameItem: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
  },
  socialsContainer: {
    width: "50%",
    marginBottom: 40,
  },
  aboutContainer: {
    marginBottom: "20%",
  },
  aboutItem: {
    marginBottom: 10,
  },
  experienceContainer: {
    marginBottom: "20%",
  },
  experienceItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  resumeDates: {
    width: "50%",
  },
  resumeContent: {
    width: "50%",
  },
  skillsContainer: {},
  skillsItem: {
    marginHorizontal: 5,
    backgroundColor: "rgba(240, 240, 240, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },
});

// const sectionStyles = StyleSheet.create({
//   centering: {
//     justifyContent: "center",
//     alignItems: "center",
//     verticalAlign: "middle",
//   },
//   margin: {
//     margin: 20,
//   },
//   titleContainer: {
//     justifyContent: "center",
//     width: "50%",
//   },
// });
// const styles = StyleSheet.create({
//   screen: {
//     overflow: "scroll",
//     backgroundColor: "#1f1B24",
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   blogHeaderOption: {
//     marginRight: 20,
//   },
//   introduction: {
//     height: "85%",
//   },
//   experience: {
//     height: "50%",
//     alignItems: "center",
//   },
//   skills: {
//     height: "50%",
//   },
//   work: {
//     height: "50%",
//   },
//   contact_me: {
//     height: "50%",
//   },
//   item: {
//     flex: 1,
//     maxWidth: "33%",
//     padding: 30,
//   },
// });
