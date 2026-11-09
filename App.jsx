import { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'

const App = () => {
const [sayi1,setSayi1]= useState('')
const [sayi2,setSayi2]= useState('')
const [sonuc,setSonuc]= useState('')


const topla = ()=>{
  setSonuc(Number(sayi1) + Number(sayi2))
}

const cikar = ()=>{
  setSonuc(Number(sayi1) - Number(sayi2))

}

const carp = ()=>{
  setSonuc(Number(sayi1) * Number(sayi2))

}

const bol = ()=>{
  setSonuc(Number(sayi1) / Number(sayi2))

}


  return (
    <View style={styles.container }>
      <Text>HESAP MAKİNESİ</Text>
      <TextInput style={styles.input}
      placeholder='Birinci sayıyı gir'
      keyboardType='numeric'
      value='{sayi1}'
      onChangeText={setSayi1}
      />

   <TextInput style={styles.input}
      placeholder='ikinci sayıyı gir'
      keyboardType='numeric'
      value='{sayi22}'
      onChangeText={setSayi2}
      />
      <View style={styles.buttons}>
        <Button title='topla +' onPress={topla} />
 <Button title='çıkarma -' onPress={topla} /> 
 <Button title='çarp *' onPress={topla} />
  <Button title='bölme /' onPress={topla} />
      </View>

<Text style={styles.result}> SONUÇ:  {sonuc}  </Text>


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundcolor:'pink'
  },  

  title:{
    fontsize:28,
    textAlign:'center',
    narginBotton:30 
  },
  input:{
    borderWidth:1,
    borderColor:'gray',
    padding:15,
    narginBotton:15,
    borderRadius:10 
    },
    buttons:{
      gap:10
    },
    result: {
      fontSize:25,
      textAlign:'center',
      narginTop:30
    }
  })