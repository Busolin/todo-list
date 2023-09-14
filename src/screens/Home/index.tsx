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
      id: "1",
      onComplete: () => {},
    },
    {
      description: "Go to the gym",
      done: true,
      id: "2",
      onComplete: () => {},
    },
    {
      description: "Read a book",
      done: false,
      id: "3",
      onComplete: () => {},
    },
    {
      description: "Complete work project",
      done: true,
      id: "4",
      onComplete: () => {},
    },
    {
      description: "Call a friend",
      done: false,
      id: "5",
      onComplete: () => {},
    },
    {
      description: "Take a walk",
      done: true,
      id: "6",
      onComplete: () => {},
    },
    {
      description: "Cook dinner",
      done: false,
      id: "7",
      onComplete: () => {},
    },
    {
      description: "Do laundry",
      done: true,
      id: "8",
      onComplete: () => {},
    },
    {
      description: "Write in journal",
      done: false,
      id: "9",
      onComplete: () => {},
    },
    {
      description: "Watch a movie",
      done: true,
      id: "10",
      onComplete: () => {},
    },
  ];

  const [tasks, setTasks] = useState<TaskProps[]>(mockedTasks);
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
