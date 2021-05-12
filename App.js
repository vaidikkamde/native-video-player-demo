/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import VideoPlayer from 'react-native-rn-videoplayer';

import fetchVimeo from './src/components/fetchVimeo';

const App = () => {
  const videoRefs = fetchVimeo({vimeoId: '299264098'});
  return (
    <SafeAreaView>
      <VideoPlayer
        url={videoRefs.response.videoUrl}
        autoplay={false}
        lockControl={true}
        moreSetting={() => null}
        storeComponent={() => null}
        pausedTipText={'Paused'}
        loadingText={'Loading...'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
