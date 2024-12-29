import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedEmailFormProps = {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedEmailForm({
  lightColor,
  darkColor,
  ...otherProps
}: ThemedEmailFormProps) {
  const [text, onChangeText] = React.useState("testing");
  const [subject, onChangeSubject] = React.useState("");
  const [form, onChangeForm] = React.useState("");
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  return (
    <View>
      <TextInput
        style={[styles.input, { borderColor }]}
        onChangeText={onChangeForm}
        value={form}
      />
      <TextInput
        style={[styles.input, { borderColor }]}
        onChangeText={onChangeSubject}
        value={subject}
      />
      <TextInput
        style={[styles.input, { borderColor }]}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
