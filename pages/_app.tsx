import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
