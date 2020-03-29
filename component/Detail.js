import React, { Component } from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Detail extends Component {
   constructor(props) {
      super(props);

      this.state = {
         comments: [
            {
               id: 1,
               name: "Gohan",
               date: "1 Januari 2020",
               comment: "Wah bagus ya postingannya"
            },
            {
               id: 2,
               name: "Ega",
               date: "2 Januari 2020",
               comment: "Wah bagus ya postingannya"
            },
            {
               id: 3,
               name: "Sam",
               date: "3 Januari 2020",
               comment: "Wah bagus ya postingannya"
            }
         ]
      }
   }
   
   render() {
      const { post } = this.props.route.params;
      
      return (
         <ScrollView>
            <View style={{ padding: 10 }}>
               <Image
                  style={{flex: 1, height: 300}}
                  source={{uri: post.image}}
                  />
               <Text>{post.category + " - " + "1 Januari 2020"}</Text>
               <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                     style={{width: 40, height: 40, borderRadius: 20, marginRight: 16}}
                     source={{uri: post.author.image}}
                     />
                  <Text>{post.author.name}</Text>
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
                        <View key={comment.id} style={{ marginBottom: 20 }}>
                           <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{comment.name}</Text>
                           <Text>{comment.date}</Text>
                           <Text>{comment.comment}</Text>
                        </View>
                     )
                  })
               }
            </View>
         </ScrollView>
      )
   }
}
