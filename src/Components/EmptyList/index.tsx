import { Text, View } from "react-native";
import Image from "react-native-remote-svg";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.listEmptyContainer}>
      <Image source={require("./clipboard.svg")} />

      <View>
        <Text
          style={[
            styles.listEmptyContainerText,
            styles.listEmptyContainerTextBold,
          ]}
        >
          Você ainda não tem tarefas cadastradas{" "}
        </Text>
        <Text style={styles.listEmptyContainerText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
