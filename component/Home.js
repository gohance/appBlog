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
                  image: 'http://placekitten.com/100/100'
               },
               content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
               title: 'Title 2',
               category: 'Economy',
               image: 'http://placekitten.com/500/300',
               author: {
                  name: 'Koko',
                  image: 'http://placekitten.com/100/100'
               },
               content: 'Konten kedua'
            },
            {
               title: 'Title 3',
               category: 'Social',
               image: 'http://placekitten.com/500/300',
               author: {
                  name: 'Rahmat',
                  image: 'http://placekitten.com/100/100'
               },
               content: 'Konten ketiga'
            },
            {
               title: 'Title 4',
               category: 'Culture',
               image: 'http://placekitten.com/500/300',
               author: {
                  name: 'Ani',
                  image: 'http://placekitten.com/100/100'
               },
               content: 'Konten Keempat'
            },
            {
               title: 'Title 5',
               category: 'Education',
               image: 'http://placekitten.com/500/300',
               author: {
                  name: 'Wahyu',
                  image: 'http://placekitten.com/100/100'
               },
               content: 'Konten kelima'
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
                     <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', {
                        post: post
                        })}>
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
