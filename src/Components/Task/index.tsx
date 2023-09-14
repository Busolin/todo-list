import { Text } from "react-native";

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  onComplete: () => void;
}

export function Task({ description }: TaskProps) {
  return (
    <>
      <Text>{description}</Text>
    </>
  );
}
