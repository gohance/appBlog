import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Home extends Component {
   constructor (props) {
      super(props);
      this.state = {
         comment : ''
      }
   }
   render() {
      return (
         <View style={{ padding: 10 }}>
            <Text style={{ marginBottom: 10 }}>Komentar Anda</Text>
            <TextInput 
               style={{height: 100, backgroundColor: '#fff', marginBottom: 10}} 
               placeholder='Buat komentar'
               onChangeText={(input) => {this.handleChange(input)}}
               textAlignVertical={'top'}
               />
            <Button title="Simpan Komentar" onPress={this.handleSave} />
         </View>
      )
   }

   handleChange (input) {
      this.setState({
         comment: input
      }, function () {
         console.log(this.state.comment)
      })
   }

   handleSave () {
      
   }
}
