// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import CartState from './Context/CartState.jsx'

// import CartState from "./Context/CartState";

// createRoot(document.getElementById('root')).render(
//   <CartState>
//     <App />
//   </CartState>,
// )




createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);