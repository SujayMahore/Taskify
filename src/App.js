import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {Routes,Route,Link} from 'react-router-dom'
import Tasks from './components/Tasks';
import io from 'socket.io-client'
import { useEffect } from 'react';
import {Stomp}  from '@stomp/stompjs'
import LoginWrapper from './components/LoginWrapper';

// const socket = io("http://localhost:8080")

function App() {
  // socket.on("connection",(socket)=>{
  //   console.log(`User connected with id ${socket.id}`);
  // })

  // useEffect(()=>{
  //   socket.on("message",(message)=>{
  //     console.log("Recieved message",message);
  //   })

  //   return()=>{
  //     socket.off("message")
  //   }
  // },[socket])
  // useEffect(()=>{
  //   const client = Stomp.client('ws://localhost:8080/gs-guide-websocket');
  //   client.connect({},()=>{
  //     console.log("Connected to websocket")
  //     client.subscribe("/message",(message)=>{
  //       console.log("Recieved message",message);
  //     })
  //   })
  //   return ()=>{
  //     client.disconnect(()=>{
  //       console.log("Disconnected from websocket")
  //     })
  //   }
  // },[])



  return (
    <div className="App flex h-screen w-screen">
      {/* <LoginWrapper></LoginWrapper> */}
    
      




      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='tasks' element={<Tasks></Tasks>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
