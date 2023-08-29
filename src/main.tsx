import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from "react-hot-toast";
import App from './App.tsx';
import { persistor, store } from './app/store.ts';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Toaster toastOptions={{ className: "text-foreground bg-primary-foreground" }} />
      <App />
    </PersistGate>
  </Provider>
)
