import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './day5'
import Sample from './sample'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Sample />
    <App />
   
    
  </StrictMode>,
)
