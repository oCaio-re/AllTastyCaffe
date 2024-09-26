import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {register} from 'swiper/element-bundle';
import App from './App.tsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// import 'swiper/css/css/scrollbar'
register();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </StrictMode>,
)
