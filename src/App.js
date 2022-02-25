import './App.css';
import { useState, useEffect } from 'react';
import VideoList from './components/videolist/VideoList';
import Searchbar from './components/searchbar/Searchbar.js';


function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const search = (searchValueTxt)=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items))
      .catch(error => console.log('error', error));
  } //서치 함수 끝
  
  // ,[] 한 번만 콜
  useEffect(()=>{    
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`, requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result.items))
        .then(result => setVideoItems(result.items)) // items를 받아와 setVideoItems 전달
        .catch(error => console.log('error', error));
  },[])

  return (
    <div className="App">
      <Searchbar searchResult={search} />
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;