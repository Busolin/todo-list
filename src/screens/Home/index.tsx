import {
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
  const mockedTasks: TaskProps[] = [
    {
      description:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
      done: false,
      id: "0",
      onComplete: () => {},
    },
  ];

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksDone, setTasksDone] = useState(0);

  useEffect(() => {
    handleTasks();
  }, []);

  function handleTasks(): void {
    countTasksDone();
    setTasksDoneToEndOfList();
  }

  function countTasksDone(): void {
    setTasksDone(() => tasks.filter((task) => task.done).length);
  }

  function setTasksDoneToEndOfList(): void {
    const tasksDone = tasks.filter((task) => task.done);
    const tasksNotDone = tasks.filter((task) => !task.done);

    setTasks([...tasksNotDone, ...tasksDone]);
  }

  const [taskDescription, setTaskDescription] = useState("");

  function handleAddNewTask() {
    const taskId = (tasks.length + 1).toString();

    const newTask: TaskProps = {
      id: taskId,
      description: taskDescription,
      done: false,
      onComplete: () => {},
    };

    // Why when console.log(tasks), even with async, the object is without the new item?
    setTasks((prevState) => [newTask, ...prevState]);
    setTaskDescription("");
  }

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
              onChangeText={setTaskDescription}
              value={taskDescription}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddNewTask}
            >
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
                  onComplete={() => {}}
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
    </>
  );
}
