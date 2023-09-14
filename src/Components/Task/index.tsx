import { Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "../RadioButton";
import Image from "react-native-remote-svg";
import { styles } from "./style";

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  onComplete: () => void;
  onRemove: () => void;
}

export function Task({ description, done, onComplete, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <RadioButton onComplete={onComplete} selected={done} />
      <Text style={[styles.text, done ? styles.textTaskComplete : null]}>
        {description}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("./trash.svg")}></Image>
      </TouchableOpacity>
    </View>
  );
}
