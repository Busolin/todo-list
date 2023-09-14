import { Text, View } from "react-native";
import { RadioButton } from "../RadioButton";
import Image from "react-native-remote-svg";
import { styles } from "./style";

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  onComplete: () => void;
}

export function Task({ id, description, done }: TaskProps) {
  return (
    <View style={styles.container}>
      <RadioButton selected={done} />
      <Text style={[styles.text, done ? styles.textTaskComplete : null]}>
        {description}
      </Text>
      <Image source={require("./trash.svg")}></Image>
    </View>
  );
}
