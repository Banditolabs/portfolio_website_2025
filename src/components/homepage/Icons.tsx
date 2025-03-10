import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { useThemeColor } from "@/src/hooks/useThemeColor";

export type IconProps = {
  lightColor?: string;
  darkColor?: string;
};

export function Icons({ lightColor, darkColor }: IconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon");

  return (
    <View style={[styles.socialsContainer]}>
      <a href={"https://www.linkedin.com/in/joshuagoss/"} target="_blank">
        <FontAwesomeIcon
          color={color}
          icon={faLinkedin}
          style={{ height: 24, width: 24 }}
        />
      </a>
      <a href={"https://github.com/Banditolabs"} target="_blank">
        <FontAwesomeIcon
          color={color}
          icon={faGithub}
          style={{ height: 24, width: 24 }}
        />
      </a>
      <a href={"https://x.com/GossuaJ"} target="_blank">
        <FontAwesomeIcon
          color={color}
          icon={faXTwitter}
          style={{ height: 24, width: 24 }}
        />
      </a>
      <a href={"mailto:Joshuagosst@gmail.com"}>
        <FontAwesomeIcon
          color={color}
          icon={faInbox}
          style={{ height: 24, width: 24 }}
        />
      </a>
    </View>
  );
}

const styles = StyleSheet.create({
  socialsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    gap: 10,
  },
  icon: {},
});
