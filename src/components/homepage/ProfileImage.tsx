import { Image, StyleSheet } from "react-native";

export default function ProfileImage() {
  return (
    <Image
      source={require("@/assets/images/profile-image.png")}
      style={styles.profileImage}
    />
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
