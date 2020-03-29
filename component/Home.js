import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import { card } from '../styles/home'
import axios from 'axios';

export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blog_posts: [],
         base_url: "https://blog-purwadhika.appspot.com/"
      }
   }
   render() {
      return (
         <ScrollView>
            {
               this.state.blog_posts.map(post => {
                  return (
                     <TouchableHighlight 
                        key={post.id}
                        onPress={() => this.props.navigation.navigate('Detail', {
                           post: post
                        })}>
                        <View style={card.container}>
                           <Image
                              style={{flex: 1, height: 300}}
                              source={{uri: post.image_banner}}
                              />
                           <Text style={card.title}>{post.title}</Text>
                           <Text style={card.subTitle}>{post.category}</Text>
                        </View>
                     </TouchableHighlight>
                  )
               })
            }
         </ScrollView>
      )
   }

   componentDidMount() {
      axios({
         method: 'get',
         url: this.state.base_url + 'posts?limit=5'
       })
       .then(data => {
          this.setState({
             blog_posts: data.data.results
          })
       })
       .catch(err => {
         console.log(err);
       });
   }
 }
