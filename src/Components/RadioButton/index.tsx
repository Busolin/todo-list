import { View } from "react-native";
import Image from "react-native-remote-svg";
import { styles } from "./style";

export interface RadioButtonProps {
  selected: boolean;
}

export function RadioButton({ selected }: RadioButtonProps) {
  return (
    <View>
      <View style={styles.radioButton}>
        {selected ? (
          <View style={styles.radioButtonDone}>
            <Image
              source={require("./checked.svg")}
              style={styles.radioButtonImage}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}
