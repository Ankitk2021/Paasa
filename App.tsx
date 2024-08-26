/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import six from './src/assets/six.png';
import five from './src/assets/five.png';
import four from './src/assets/four.png';
import three from './src/assets/three.png';
import two from './src/assets/two.png';
import one from './src/assets/one.png';

import {Image, ImageSourcePropType, SafeAreaView, Text} from 'react-native';

type DiceProps = PropsWithChildren<{
  ImageUri: ImageSourcePropType;
}>;
const Dice = ({ImageUri}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image
        style={{height: 180, width: 180, borderRadius: 23}}
        source={ImageUri}
      />
    </View>
  );
};

function App(): React.JSX.Element {
  const [DiceImg, setDiceImg] = useState<DiceProps>(two);
  const [color, SetColor] = useState('blue');
  function Roll() {
    const Number = Math.floor(Math.random() * 4 + 1);

    SetColor('#' + Math.floor(Math.random() * 1000000).toString());

    switch (Number) {
      case 1:
        setDiceImg(one);
        break;
      case 2:
        setDiceImg(two);
        break;
      case 3:
        setDiceImg(three);
        break;
      case 4:
        setDiceImg(four);
        break;
      case 5:
        setDiceImg(five);
        break;
      case 6:
        setDiceImg(six);
        break;

      default:
        setDiceImg(one);
        break;
    }
  }

  return (
    <SafeAreaView>
      <View>
        <View style={[style.container, {backgroundColor: color}]}>
          <Dice ImageUri={DiceImg} />

          <TouchableOpacity style={style.button}>
            <Text style={{color: 'white'}} onPress={Roll}>
              Roll the Dice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 36,
    backgroundColor: 'green',
    borderRadius: 120,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.2,
    marginTop: 42,
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
