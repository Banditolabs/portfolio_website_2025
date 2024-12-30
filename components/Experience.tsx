import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function Experience() {
  return (
    <View style={styles.experienceContainer}>
      <View style={[styles.experienceItem]}>
        <View style={[styles.resumeDates]}>
          <ThemedText style={{ fontSize: 12, marginRight: 10 }}>
            November 2022 - December 2024
          </ThemedText>
        </View>
        <View style={[styles.resumeContent]}>
          <ThemedText type={"defaultSemiBold"} style={{ marginBottom: 10 }}>
            Software Engineer
          </ThemedText>
          <ThemedText type={"subtext"}>
            Built and maintained critical payment achitecture and features for
            Kajabi's payment collection domain. Streamlined project planning by
            defining development processes, breaking down features into
            actionable tasks, and providing accurate time estimates.
          </ThemedText>
          <View>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                listStyleType: "none",
                paddingLeft: 0,
                gap: 8,
                marginTop: 10,
              }}
            >
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  Ruby
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  TypeScript
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  React
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  MySQL
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  Rails
                </ThemedText>
              </li>
            </ul>
          </View>
        </View>
      </View>
      <View style={[styles.experienceItem]}>
        <View style={[styles.resumeDates]}>
          <ThemedText style={{ fontSize: 12, marginRight: 10 }}>
            October 2020 - November 2022
          </ThemedText>
        </View>
        <View style={[styles.resumeContent]}>
          <ThemedText type={"defaultSemiBold"} style={{ marginBottom: 10 }}>
            Technical Support Lead
          </ThemedText>
          <ThemedText type={"subtext"}>
            Used technical knowledge of Kajabi's application to support as
            cornerstone member of Kajabi's 200 plus person support structure.
            Served as liasion to the engineering team to help prioritize,
            document and replicate bugs reported through the support org.
          </ThemedText>
          <View>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                listStyleType: "none",
                paddingLeft: 0,
                gap: 8,
                marginTop: 10,
              }}
            >
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  HTML
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  CSS
                </ThemedText>
              </li>
              <li>
                <ThemedText style={styles.skillsItem} type="skill">
                  JavaScript
                </ThemedText>
              </li>
            </ul>
          </View>
        </View>
      </View>
      <View style={[styles.experienceItem]}>
        <View style={[styles.resumeDates]}>
          <ThemedText style={{ fontSize: 12, marginRight: 10 }}>
            June 2019 - Octrober 2020
          </ThemedText>
        </View>
        <View style={[styles.resumeContent]}>
          <ThemedText type={"defaultSemiBold"} style={{ marginBottom: 10 }}>
            Technical Support Agent
          </ThemedText>
          <ThemedText type={"subtext"}>
            Provided top quality customer support to Kajabi customers. Worked to
            understand Kajabi's app on a deep level and become a point person
            for peers with questions and in need of collaboration.
          </ThemedText>
        </View>
      </View>
      {/* <Link href={{ href: "@/assets/documents/Resume.pdf" }}>
                        <ThemedText>Full Resume</ThemedText>
                      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  experienceContainer: {
    marginBottom: "20%",
  },
  experienceItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  resumeDates: {
    width: "40%",
  },
  resumeContent: {
    width: "60%",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillsItem: {
    marginHorizontal: 0,
    backgroundColor: "rgba(240, 240, 240, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },
});
