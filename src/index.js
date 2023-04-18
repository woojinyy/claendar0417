<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore } from 'redux';
import AuthLogic from './service/authLogic';
import firebaseApp from "./service/firebase";
import rootReducer from "./redux/rootReducer";
import { Provider } from 'react-redux';
import { setAuth } from './redux/userAuth/actions';
//리덕스 적용하기
const store = legacy_createStore(rootReducer)//worker(state,action)
// auth객체 생성하기
const authLogic= new AuthLogic(firebaseApp);
//store에 있는 초기 상태
store.dispatch(setAuth(authLogic.getUserAuth(),authLogic.getGoogleAuthProvider()))
console.log(store.getState());//getState()함수를 통해 상태값 보기 state.js에있는 정보

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store} >{/* props로 넘기기 */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HackerApp from "./HackerApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/*    <App /> */}
    <HackerApp />
>>>>>>> 6d2ef25fc31fa8f49357f813c7de6ec3ae1148d2
  </>
);
/* HackerNews데이터를 axios가져올 때 ReacStrictMode가 있으면 두 번 요청발생
빈태그로 변경하였다
여기서 빈태그는  Fragement를 의미함 */
