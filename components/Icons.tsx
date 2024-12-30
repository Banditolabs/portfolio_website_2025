import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { useThemeColor } from "@/hooks/useThemeColor";

export type IconProps = {
  lightColor?: string;
  darkColor?: string;
};

export function Icons({ lightColor, darkColor }: IconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon");

  return (
    <View style={[styles.socialsContainer]}>
      <a href={"https://www.linkedin.com/in/joshuagoss/"}>
        <FontAwesomeIcon
          color={color}
          icon={faLinkedin}
          style={{ height: 24, width: 24 }}
        />
      </a>
      <a href={"https://github.com/Banditolabs"}>
        <FontAwesomeIcon
          color={color}
          icon={faGithub}
          style={{ height: 24, width: 24 }}
        />
      </a>
      <a href={"https://x.com/GossuaJ"}>
        <FontAwesomeIcon
          color={color}
          icon={faXTwitter}
          style={{ height: 24, width: 24 }}
        />
      </a>
    </View>
  );
}

const styles = StyleSheet.create({
  socialsContainer: {
    width: "50%",
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
  },
});
