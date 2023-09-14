import { TouchableOpacity, View } from "react-native";
import Image from "react-native-remote-svg";
import { styles } from "./style";

export interface RadioButtonProps {
  selected: boolean;
  onComplete: () => void;
}

export function RadioButton({ selected, onComplete }: RadioButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={onComplete}>
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
      </TouchableOpacity>
    </View>
  );
}
