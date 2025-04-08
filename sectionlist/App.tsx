import React, {useState} from 'react';
import { Image, SectionList, Text, TextInput, View, StyleSheet } from 'react-native';

type Filme = {
  nome: string;
  imagem: string;
};


const filmesPorCategoria = [
  {
    title: 'Animação',
    data: [
      { nome: 'O Castelo Animado', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KMG4k_xTzacmjYEFsfIpzgCCAJlm2monUA&s' },
      { nome: 'A Viagem de Chihiro', imagem: 'https://www.sescpr.com.br/wp-content/uploads/2021/12/viagem-de-chihiro.jpg' },
      { nome: 'Your Name', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThh7WVrJ3PiGF3KHG0686L64HLmjYKqdHWoQ&s' },
    ],
  },
  {
    title: 'Drama',
    data: [
      { nome: 'Sempre ao Seu Lado', imagem: 'https://s2-globo-play.glbimg.com/zPoOzE03B2EazPa7hltUKpcw9Wg=/362x536/https://s2-globo-play.glbimg.com/iTyd-v0tQ-eGjclCr4w_vDYcXx0=/https://s2.glbimg.com/mXnwieQcK2bNStFYl380Q5jpmt0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/W/I/g66EemSwuw4nSsV1rBtg/1991123-poster.jpg' },
      { nome: 'Marley e Eu', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1395GRJxos5KHH1K4aqM5mlJ0bXJt6ijZA&s' },
      { nome: 'Como se fosse a primeira vez', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/215f121888199a3668533ed00a97cfddd51c4a5b070c572b3d664f51ad19f4ef.jpg' },
    ],
  },
  {
    title: 'Comédia',
    data: [
      { nome: 'O Auto da Compadecida', imagem: 'https://s2-globofilmes.glbimg.com/5pZc5id2_e_ONVClrGN-mzVD51E=/0x0:1348x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2023/0/e/CKY7UyT4GnQRCsD2uOsQ/cartazauto.jpg' },
    ],
  },
  {
    title: 'Romance',
    data: [
      { nome: 'Como se fosse a primeira vez', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/215f121888199a3668533ed00a97cfddd51c4a5b070c572b3d664f51ad19f4ef.jpg' },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFE4E1',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },

  title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 15,
  marginTop: 50,
},

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#FFB6C1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  textImageContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10,
  },

  text: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
});

const App = () => {
  const [text, setText] = useState('');

  const filmesFiltrados = filmesPorCategoria.map((section) => ({
    ...section,
    data: section.data.filter((filme) =>
      filme.nome.toLowerCase().startsWith(text.toLowerCase())
    ),
  }));

  return (
  <View style={styles.container}>
  <Text style={styles.title}>Procure Filmes 🎬</Text>
    <TextInput
        style={styles.input}
        placeholder="Pesquise aqui..."
        onChangeText={setText}
        value={text}
      />

    <SectionList
        sections={filmesFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        renderItem={({ item }: { item: Filme }) => (
          <View style={styles.textImageContainer}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        )}
      />
  </View>
);
};

export default App;