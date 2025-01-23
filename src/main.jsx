/* eslint-disable react/jsx-no-undef */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Task from './rackLIstAndKeys/task.jsx'
// import DisplayProfile, { PostPage } from './App.jsx'
// import PropsExample from './props_example.jsx'
// import CounterApp from './counter.jsx'
// import EventExample from './event_example.jsx'
// import ConditionalRenderingExample from './ConditionalRenderingExample.jsx'
// import UncontrolledForm from './formsinReact/UncontrolledForm';
import LoginPage from './formsinReact/LoginPage';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DisplayProfile />
    <PostPage /> */}
    {/* <PropsExample></PropsExample>
    <EventExample></EventExample>
    <CounterApp></CounterApp>
    <ConditionalRenderingExample></ConditionalRenderingExample> */}
     {/* <Task/>  */}
     {/* <UncontrolledForm/> */}
     <LoginPage/>
  </StrictMode>,
)
