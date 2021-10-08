import Appbar from './Components/Appbar'
import './App.css';
import Sidebar from './Components/Sidebar';
import Map from './Components/Map';
import './style.css';
import {useEffect,useState} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


function App() {
  const [data, setdata] = useState(null)
  useEffect(() => {
    const client = new W3CWebSocket('wss://medical-emergency.herokuapp.com/ws/location/');
    client.onerror = function() {
      console.log('Connection Error');
  };

  client.onopen = function() {
    console.log('WebSocket Client Connected');
  

  client.onmessage = function(message){
    console.log(message.data)
    console.log(JSON.parse(message.data) instanceof Array)
    if(JSON.parse(message.data) instanceof Array){
      setdata(JSON.parse(message.data))
    }
    
    
  }  
    
};

    return () => {
      client.close();
    }
  }, [])
  return (
    <>
      <Appbar />
      <div style={{margin:0, padding:0}}>
      <div className="main-body">
      <div style={{height:'100vh',flex:1}}><Sidebar data={data} /></div>
      <div style={{flex:4}}><Map  data={data}/></div>

      </div>
      </div>
    </>
  );
}

export default App;
