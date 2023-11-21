import React, {useState} from 'react';
import {StatusBar, View, TouchableOpacity, Text} from 'react-native';

const App = (): JSX.Element => {
  const [randomBackground, setRandomBackground] = useState<string>('#000000');

  const setRandomBackgroundColor = (): void => {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };
  return (
    <>
      <StatusBar animated={true} backgroundColor={randomBackground} />
      <View style={{...styles.container, backgroundColor: randomBackground}}>
        <TouchableOpacity
          onPress={() => setRandomBackgroundColor()}
          style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
  },
};
export default App;
