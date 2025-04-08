import {View, Text} from "react-native";

type DogProps = {
  name: string;
  age: number;
  weight: number;
  height: number;
};

const Dog = (props: DogProps) => {
  return (
    <View> 
    <Text>🐶Meu nome é {props.name} e eu sou um cachorro! Aqui estão algumas coisas sobre mim:</Text>
    <Text>Idade: {props.age} anos </Text>
    <Text>Peso: {props.weight} kg </Text>
    <Text>Altura: {props.height} cm</Text>
    </View>

  );
};
export default Dog;