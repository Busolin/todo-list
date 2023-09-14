import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task, TaskProps } from "../../Components/Task";
import Image from "react-native-remote-svg";

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <>
      <View style={styles.homeContainer}>
        <View style={styles.homeHeaderBackground}></View>
        <View style={styles.homeHeader}>
          <View style={styles.logoWrapper}>
            <Image source={require("./logo.svg")} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputNewTask}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={"#808080"}
            />
            <TouchableOpacity style={styles.addButton}>
              <Image source={require("./plus.svg")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.homeContent}>
          <View style={styles.tasksMeter}>
            <View style={styles.taskInformation}>
              <Text style={styles.taskType}>Criadas</Text>
              <View style={styles.taskMeterContainer}>
                <Text style={styles.taskMeter}>0</Text>
              </View>
            </View>

            <View style={styles.taskInformation}>
              <Text style={[styles.taskType, styles.taskCompleted]}>
                Concluídas
              </Text>
              <View style={styles.taskMeterContainer}>
                <Text style={styles.taskMeter}>0</Text>
              </View>
            </View>
          </View>

          <View>
            <FlatList
              data={tasks}
              keyExtractor={(item: TaskProps) => item.id}
              renderItem={({ item }) => (
                <Task
                  key={item.id}
                  description={item.description}
                  done={item.done}
                  onComplete={() => {}}
                  id={item.id}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
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
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
}
