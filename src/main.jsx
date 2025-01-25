/* eslint-disable react/jsx-no-undef */
// import { StrictMode } from 'react'

//import './index.css'
// import Task from './rackLIstAndKeys/task.jsx'
// import DisplayProfile, { PostPage } from './App.jsx'
// import PropsExample from './props_example.jsx'
// import CounterApp from './counter.jsx'
// import EventExample from './event_example.jsx'
// import ConditionalRenderingExample from './ConditionalRenderingExample.jsx'
// import UncontrolledForm from './formsinReact/UncontrolledForm';
// import LoginPage from './formsinReact/LoginPage';





// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   //   {/* <DisplayProfile />
//   //   <PostPage /> */}
//   //   {/* <PropsExample></PropsExample>
//   //   <EventExample></EventExample>
//   //   <CounterApp></CounterApp>
//   //   <ConditionalRenderingExample></ConditionalRenderingExample> */}
//   //    {/* <Task/>  */}
//   //    {/* <UncontrolledForm/> */}
//   //    <LoginPage/>
//   // </StrictMode>,
//   <BrowserRouter/>
// )
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import LoginPage from './formsinReact/LoginPage';
import CounterApp from './counter';
import App from './App';
import UseEffectExample from './hookExample/UseEffectExample';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<BrowserRouter>
    <Routes>
      {/* initial route  */}
      <Route path='/' element={<App/>}>
        <Route index element={<CounterApp />} />
        <Route path='/login'element={<LoginPage/>}/>
        <Route path='timer'element={<UseEffectExample/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
)