import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";

export function Icons() {
  return (
    <View style={[styles.socialsContainer]}>
      <View>
        <FontAwesomeIcon icon={faLinkedin} style={{ height: 24, width: 24 }} />
        <FontAwesomeIcon icon={faGithub} style={{ height: 24, width: 24 }} />
        <FontAwesomeIcon icon={faXTwitter} style={{ height: 24, width: 24 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialsContainer: {
    width: "50%",
    marginBottom: 40,
  },
});
