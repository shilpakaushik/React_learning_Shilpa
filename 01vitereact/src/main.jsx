import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
  <div>custom MyApp</div>
)
  
}
/*const reactElement = {
    type:"a", 
    props: {
    href:  "https://react.dev",
    target: "_blank"
  },
    children: "Welcome react dev tutorial"
   
}*/
const anotherComponent = (
  <a href="https://react.dev" target="_blank">Welcome react dev tutorial</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <reactElement />
  {anotherComponent}
    <MyApp />
    <App />
  </StrictMode>,
)
