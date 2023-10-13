// Importações dos módulos necessários do React e do React Native
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// Classe do componente principal
class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      textoFrase: " ",  // Estado inicial do texto da frase vazio
      img: require('./src/biscoito.png')  // Estado inicial da imagem (biscoito fechado)
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);  // Vincula o método "quebraBiscoito" ao contexto atual.

    this.frases = [
      "A sorte favorece os ousados",
      "O sucesso está na jornada, não no destino",
      "Siga seus sonhos com determinação e paixão",
      "Acredite em si mesmo e os outros também acreditarão",
      "Seja a mudança que você deseja ver no mundo",
      "A persistência é o caminho para o sucesso",
      "A sorte sorri para aqueles que trabalham duro",
      "Aprenda com o passado, viva o presente, sonhe com o futuro",
      "O otimismo é a chave para a felicidade",
      "A vida é cheia de surpresas, abra-se para elas"
    ];  // Array de frases inspiradoras.

  }

  // Método para quebrar o "biscoito" (gerar frase aleatória)
  quebraBiscoito(){
    // Gera um número aleatório baseado no comprimento do array de frases
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    // Atualiza o estado com a frase aleatória e a imagem do biscoito aberto
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });
  }

  // Método para renderizar o componente na interface
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase} >{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa todo o espaço disponível na tela
    alignItems: "center",  // Alinha os elementos horizontalmente ao centro
    justifyContent: 'center',  // Alinha os elementos verticalmente ao centro
  },
  img: {
    width: 250,  // Define a largura da imagem
    height: 250,  // Define a altura da imagem
  },
  textoFrase: {
    fontSize: 20,  // Define o tamanho da fonte do texto
    color: '#dd7b22',  // Define a cor do texto
    margin: 30,  // Define a margem entre o texto e outros elementos
    fontStyle: "italic",  // Define o estilo da fonte como itálico
    textAlign: 'center',  // Alinha o texto ao centro
  },
  botao: {
    width: 230,  // Define a largura do botão
    height: 50,  // Define a altura do botão
    borderWidth: 2,  // Define a largura da borda
    borderColor: "#dd7b22",  // Define a cor da borda
    borderRadius: 25,  // Define o raio de arredondamento da borda
  },
  btnArea: {
    flex: 1,  // Ocupa todo o espaço disponível na área do botão
    flexDirection: "row",  // Os elementos filho são alinhados em uma linha horizontal
    justifyContent: 'center',  // Alinha os elementos filho horizontalmente ao centro
    alignItems: 'center',  // Alinha os elementos filho verticalmente ao centro
  },
  btnTexto: {
    fontSize: 18,  // Define o tamanho da fonte do texto do botão
    fontWeight: "bold",  // Define o peso da fonte como negrito
    color: "#dd7b22",  // Define a cor do texto do botão
  }
});

export default App;  // Exporta o componente "App" como o componente padrão do módulo.
