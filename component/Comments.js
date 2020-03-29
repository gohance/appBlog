import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default class Comments extends Component {
   constructor (props) {
      super(props);
      this.state = {
         comment : '',
         base_url: "https://blog-purwadhika.appspot.com/"
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
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
      })
   }

   handleSave () {
      const { post } = this.props.route.params;

      axios({
         method: 'post',
         url: this.state.base_url + 'comments/',
         data: {
            post_id: post.id,
            comment: this.state.comment
         }
       })
       .then(data => {
          console.log("berhasil")
          this.props.navigation.goBack();
         // this.props.navigation.navigate('Detail', { post: post });
       })
       .catch(err => {
         console.log(err);
       });
   }
}
