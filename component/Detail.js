import React, { Component } from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import axios from 'axios';

export default class Detail extends Component {
   constructor(props) {
      super(props);

      this.state = {
         comments: [],
         base_url: "https://blog-purwadhika.appspot.com/"
      }
   }
   
   render() {
      const { post } = this.props.route.params;
      
      return (
         <ScrollView>
            <View style={{ padding: 10 }}>
               <Image
                  style={{ flex: 1, height: 300, alignSelf: 'center' }}
                  source={{ uri: post.image_banner }}
                  />
               <Text>{post.category + " - " + "1 Januari 2020"}</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                     style={{width: 40, height: 40, borderRadius: 20, marginRight: 16}}
                     source={{uri: post.author_image}}
                     />
                  <Text>{post.author_name}</Text>
               </View>
               <Text style={{ marginBottom: 10 }}>{post.content}</Text>
            </View>
            <Button
                  title="Buat Komentar" 
                  onPress={() => this.props.navigation.navigate('Comments', {post: post})}
                  />

            <View style={{ 
                  marginTop: 30, 
                  marginBottom: 30, 
                  borderTopWidth: 1, 
                  borderColor: '#d1d1d1',
                  padding: 10
                  }}>
               <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}> Komentar Pengunjung </Text>
               {
                  this.state.comments.map(comment => {
                     return(
                        <View key={comment.id} style={{ paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d1', borderBottomWidth: 1 }}>
                           <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{"Gohan Parningotan"}</Text>
                           <Text style={{ color: '#888888', marginBottom: 10 }}>{comment.timestamp_created}</Text>
                           <Text>{comment.comment}</Text>
                        </View>
                     )
                  })
               }
            </View>
         </ScrollView>
      )
   }

   componentDidMount () {
      const { post } = this.props.route.params;
      axios({
         method: 'get',
         url: this.state.base_url + 'post/'+ post.id +'/comments/' 
       })
       .then(data => {
          this.setState({
             comments: data.data.results
          })
       })
       .catch(err => {
         console.log(err);
       });
   }
}
