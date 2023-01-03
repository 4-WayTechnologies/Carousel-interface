import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [imgActive, setImageActive] = useState(0)
  const WindowWidth = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const image = ['https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',

    'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg']

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive) {
        setImageActive(slide)
      }
    }
  }
  return (
    <View style={styles.Container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
      >
        {
          image.map((val, ind) =>
            <View key={ind}>
              <Image source={{ uri: val }} style={{ width: WindowWidth, height: height }} />

            </View>

          )
        }

      </ScrollView>
      <View style={styles.wrapDot}>
        {image.map((val, ind) =>
          <Text key={ind} style={imgActive == ind ? styles.dotActive : styles.dot}>●</Text>
        )}
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container: {
    flex: 1,

  }, wrapDot: {

    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
    zIndex: 1,
    bottom: 20
  },
  dotActive: {
    margin: 3,
    color: '#973D00',
    marginTop: 20,
    fontSize: 20

  },
  dot: {
    margin: 3,
    color: 'gray',
    marginTop: 20,
    fontSize: 20
  },
})