import {Text, View} from 'react-native';

import Cat from "./Componentes/cat.jsx";

import Dog from "./Componentes/dog.jsx";

const App = () => {
  return (
    <View>
      <Cat name="Michael Jackson" age={8} weight={3.5} height={25}/>
      <Cat name="Neve" age={9} weight={3} height={22}/>
      <Cat name="Ariel" age={3} weight={3.2} height={20}/>
      <Dog name= "Nick" age={9} weight={15} height={50}/>
      <Dog name= "Nala" age={7} weight={30} height={65}/>
      <Dog name= "Linguiça" age={2} weight={6} height={33}/>
    </View>
  );
};

export default App;