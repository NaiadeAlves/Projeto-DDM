import {View, Text} from "react-native";

type CatProps = {
  name: string;
  age: number;
  weight: number;
  height: number;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>😺Meu nome é {props.name} e eu sou um gato! Aqui estao algumas coisas sobre mim: </Text>
      <Text>Idade: {props.age} anos </Text>
      <Text>Peso: {props.weight} kg </Text>
      <Text>Altura: {props.height} cm</Text>
    </View>
  );
};
export default Cat;