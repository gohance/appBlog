import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import { card } from '../styles/home'

export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         blog_posts: [
            {
               title: 'Title 1',
               category: 'Politics',
               image: 'http://placekitten.com/500/300',
               author: {
                  name: 'Gohan',
                  image: 'http://placekitten.com/10000'
               },
               content: 'lorem ipsum'
            },
            {
               title: 'Title 2',
               category: 'Economy',
               image: 'http://placekitten.com/500/300'
            },
            {
               title: 'Title 3',
               category: 'Social',
               image: 'http://placekitten.com/500/300'
            },
            {
               title: 'Title 4',
               category: 'Culture',
               image: 'http://placekitten.com/500/300'
            },
            {
               title: 'Title 5',
               category: 'Education',
               image: 'http://placekitten.com/500/300'
            }
         ]
      }
   }
   render() {
      return (
         <ScrollView>
            {
               this.state.blog_posts.map(post => {
                  return (
                     <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail')}>
                        <View style={card.container}>
                           <Image
                              style={{width: 500, height: 300}}
                              source={{uri: post.image}}
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
 }
