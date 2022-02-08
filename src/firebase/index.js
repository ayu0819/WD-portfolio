import firebase from 'firebase/app';

// 機能のimport
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

// config の import
import {firebaseConfig} from './config';

// ↓ importしたconfig を使って firebase を初期化し、サービスを初めるようにする
firebase.initializeApp(firebaseConfig);

// メソッドを定数にして省略する
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();

// データの作成日時を作る メソッド
export const FirebaseTimestamp = firebase.firestore.Timestamp;