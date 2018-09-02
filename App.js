import React from 'react'

// import VerticalStackLayoutFlex from './components/VerticalStackLayoutFlex'
// import VerticalStackLayoutHeaderContentFooter from './components/VerticalStackLayoutHeaderContentFooter'
// import VerticalStackLayoutManual from './components/VerticalStackLayoutManual'
// import Positioning from './components/Positioning'
// import HorizontalStackLayout from './components/HorizontalStackLayout'
// import JustifyContent from './components/JustifyContent'
// import AlignItems from './components/AlignItems'
// import GridLayout from './components/GridLayout'
import LoginView from './components/welcomescreen/LoginView'

class App extends React.Component {
  render() {
    return (
      // <VerticalStackLayoutFlex />
      // <VerticalStackLayoutHeaderContentFooter />
      // <VerticalStackLayoutManual />
      // <Positioning />
      // <HorizontalStackLayout />
      // <JustifyContent />
      // <AlignItems />
      // <GridLayout />
      <LoginView />
    )
  }
}

export default App

// import React from "react";
// import { StatusBar, StyleSheet } from "react-native";
// import {
//   Accordion,
//   Container,
//   Header,
//   Title,
//   Content,
//   Footer,
//   FooterTab,
//   Button,
//   Left,
//   Right,
//   Body,
//   Icon,
//   Text
// } from 'native-base';
// import Expo from 'expo';

// const dataArray = [
//   { title: "First Element", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
//   { title: "Second Element", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
//   { title: "Third Element", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
// ]

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: true };
//   }

//   async componentWillMount() {
//     await Expo.Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
//     });
//     this.setState({ loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <Expo.AppLoading />;
//     }
//     return (
//       <Container>
//         <StatusBar hidden={true} />
//         <Header
//         style={{ backgroundColor: 'black' }}
//         androidStatusBarColor="black">
//           <Left>
//             <Button transparent>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Poison App</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content padder>
//           <Accordion
//             dataArray={dataArray}
//             headerStyle={{ backgroundColor: '#e8e8e8' }}
//             contentStyle={{ backgroundColor: '#f7f7f7' }}
//             icon='add'
//             expandedIcon='remove'
//             iconStyle={{ color: 'blue' }}
//             expandedIconStyle={{ color: 'red' }}
//             expanded={0}
//           />
//         </Content>
//         {/* <Footer>
//           <FooterTab dark>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer> */}
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({

//   textWhite: {
//     color: 'white',
//   }
// })

// import React, { Component } from 'react'
// import { StatusBar, Image, StyleSheet } from 'react-native'
// import { Container, View, Text } from 'native-base';

// class Greeting extends Component {
//   render() {
//     return(
//       <Text>Hello {this.props.name}!</Text>
//     )
//   }
// }

// class Picture extends Component{
//   render() {
//     let pic = {
//       uri: 'http://www.urdunews.com/sites/default/files/2018/08/13/366561-1769594897.jpg'
//     }
//     return (
//       <View>
//         <Image source={pic} style={{width: 320, height: 256}} />
//       </View>
//     )
//   }
// }

// class Blink extends Component {
//   constructor(props){
//     super(props)
//     this.state = {isShowingText: true}

//     // toggle the state every second(blink the text)
//     setInterval(()=> {
//       this.setState(previousState=> {
//         return { isShowingText: !previousState.isShowingText }
//       })
//     }, 3000)
//   }
//   render(){
//     let display = this.state.isShowingText ? this.props.text: ' '
//     return(
//       <Text style={styles.bigOrange}>{display}</Text>
//     )
//   }
// }

// export default class LotOfGreetings extends Component {
//   render() {
//     return(
//       <Container>

//       {/* hide status bar */}
//       <StatusBar hidden= {true} />

//         <View style={{alignItems: 'center'}}>
//           <Greeting name='Indra' />
//           <Greeting name='Putra' />
//           <Greeting name='Hello' />
//         </View>
//         {/* Showing pictures */}
//       <Picture />

//       {/* blinking text */}
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>

//       </Container>
//     )
//   }
// }

// // css style
// const styles = StyleSheet.create({

//   bigOrange: {
//     color: 'orange',
//     fontWeight: 'bold',
//     fontSize: 30,
//     textAlign: 'right'
//   },
//   orange: {
//     color: 'orange'
//   }
// })
