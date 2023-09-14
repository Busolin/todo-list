import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Task, TaskProps } from "../../Components/Task";
import Image from "react-native-remote-svg";
import { EmptyList } from "../../Components/EmptyList";

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksDone, setTasksDone] = useState(0);

  useEffect(() => {
    countTasksDone();
  }, [tasks]);

  function countTasksDone(): void {
    setTasksDone(() => tasks.filter((task) => task.done).length);
  }

  const [taskDescription, setTaskDescription] = useState("");

  function handleAddNewTask() {
    if (!taskDescription) {
      return Alert.alert(
        "Ops!",
        "Não é possível adicionar uma tarefa vazia. Por favor, insira algum texto para adicionar uma nova tarefa."
      );
    }

    const taskId = tasks.length.toString();

    const newTask: TaskProps = {
      id: taskId,
      description: taskDescription,
      done: false,
      onComplete: () => {},
      onRemove: () => {},
    };

    // Why when console.log(tasks), even with async, the object is without the new item?
    setTasks((prevState) => [newTask, ...prevState]);
    setTaskDescription("");
  }

  function toggleTaskState(task: TaskProps) {
    const taskId = task.id;
    const taskDone = task.done;

    setTasks((prevState) => {
      return prevState.map((task) =>
        task.id === taskId ? { ...task, done: !taskDone } : task
      );
    });
  }

  function handleTaskDelete(task: TaskProps) {
    const taskId = task.id;

    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  }

  return (
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
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddNewTask}>
            <Image source={require("./plus.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.homeContent}>
        <View
          style={[
            styles.tasksMeter,
            tasks.length ? styles.tasksMeterWithTasks : null,
          ]}
        >
          <View style={styles.taskInformation}>
            <Text style={styles.taskType}>Criadas</Text>
            <View style={styles.taskMeterContainer}>
              <Text style={styles.taskMeter}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.taskInformation}>
            <Text style={[styles.taskType, styles.taskCompleted]}>
              Concluídas
            </Text>
            <View style={styles.taskMeterContainer}>
              <Text style={styles.taskMeter}>{tasksDone}</Text>
            </View>
          </View>
        </View>

        <SafeAreaView style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            keyExtractor={(item: TaskProps) => item.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                description={item.description}
                done={item.done}
                onComplete={() => toggleTaskState(item)}
                onRemove={() => handleTaskDelete(item)}
                id={item.id}
              />
            )}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyList />}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
