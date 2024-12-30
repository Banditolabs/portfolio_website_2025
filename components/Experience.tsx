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
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Promoted to Software Engineer after demonstrating technical
            proficiency and problem-solving skills in customer support and
            cross-department collaboration.
          </ThemedText>
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Built and maintained critical payment architecture and features,
            supporting Kajabi's global payment collection.
          </ThemedText>
          <ThemedText type={"subtext"}>
            Streamlined project workflows by defining development processes,
            breaking down features into actionable tasks, and delivering
            accurate time estimates, ensuring timely delivery of complex
            initiatives.
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
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Advanced to Technical Support Lead due to a deep understanding of
            Kajabi's platform and leadership skills.
          </ThemedText>
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Acted as a key liaison between support and engineering, driving
            resolution for high-impact bugs by documenting, prioritizing, and
            replicating issues reported by customers.
          </ThemedText>
          <ThemedText type={"subtext"}>
            Mentored peers and improved team effectiveness through collaboration
            and knowledge-sharing, laying the groundwork for a transition to
            engineering.
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
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Started at Kajabi as a Technical Support Specialist, developing a
            strong foundation in customer service and platform expertise.
          </ThemedText>
          <ThemedText type={"subtext"} style={{ marginBottom: 10 }}>
            Earned recognition for quickly mastering the product and becoming a
            resource for colleagues with complex questions.
          </ThemedText>
          <ThemedText type={"subtext"}>
            Collaborated with engineering to understand technical workflows,
            setting the stage for a seamless transition into a technical role.
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
