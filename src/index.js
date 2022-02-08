import React from 'react';
import ReactDOM from 'react-dom';
// storeとの接続
import {Provider} from 'react-redux';
import createStore from './reducks/store/store';
import {Header,Footer,Sns,NavMb} from './components/Common';
//

// ② routing機能
import {ConnectedRouter} from "connected-react-router";
import * as History from "history";
//

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CSS
import './assets/style/reset.css';
import './assets/style/common.css';

// ② routing機能 ⇨ Store
const history = History.createBrowserHistory();
//

// ② routing機能 (history) 追加
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    {/* ② routing機能 */}
    <ConnectedRouter history={history}>
      <Header />
      <NavMb />
     <App />
     <Sns />
     <Footer />
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
