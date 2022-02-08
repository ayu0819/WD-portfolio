import {signInAction,signOutAction} from './actions';
import {push} from 'connected-react-router';
import {auth, db, FirebaseTimestamp} from '../../firebase/index'

// export const signIn = () => {
//     return async (dispatch, getState) => {
//         const state = getState()
//         const isSignedIn = state.users.inSignedIn

//         if (!isSignedIn) {
//             const url = 'https://api.github.com/users/deatiger'

//             const response = await fetch(url)
//             .then(res => res.json())
//             .catch(() => null)

//          const username = response.login
         
//          dispatch(signInAction({
//              isSignedIn: true,
//              uid: "0001",
//              username: username
//          }))
//          dispatch(push('/'))
//         }
//     }
// }


// 認証リッスン関数 Authで認証
export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if(user) {
               //認証されててる データーベースから取得した情報をStoreのStateとして持たせる 関数で切り出してもいい
               const uid = user.uid

               db.collection('users').doc(uid).get()
               .then(snapshot => {
                   const data = snapshot.data()

                   dispatch(signInAction({
                       isSignedin: true,
                       role: data.role,
                       uid: uid,
                       username: data.username
                   }))

                   dispatch(push('/'))
               })

            } else {
                // 認証されてない
                dispatch(push('/signin'))
            }
        })

    }
}

// signUp関数
// validation thuck型
export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
     if (username === "" || email === "" || password === "" || confirmPassword === "") {
         alert("必須項目が見入力です")
         return false
     }

     if (password !== confirmPassword) {
         alert("パスワードが一致しません")
         return false
     }

    //  auth の設定
    return auth.createUserWithEmailAndPassword(email,password)
      .then(result => {
          const user = result.user
          
        //   ユーザーが存在していたら
          if(user) {
             const uid = user.uid
             const timestamp = FirebaseTimestamp.now()

             const userInitialData = {
                 created_at: timestamp,
                 email: email,
                 role: "customer",
                 uid: uid,
                 updated_at:  timestamp,
                 username: username
             }
             db.collection('users').doc(uid).set(userInitialData)
          .then(() => {
              dispatch(push('/admin'))
          })
          }
          
      })
    }
}

//signIn 関数
export const signIn = (email, password) => {
 return async (dispatch) => {
    //  Validation
     if (email === "" || password === "") {
        alert("必須項目が見入力です")
        return false
     }

    //  signInWithEmailAndPassword で ログイン処理を設定する
     return auth.signInWithEmailAndPassword(email,password)
     .then(result => {
        //  ユーザー情報
      const user = result.user;

    //   もしもユーザーが存在したら
      if(user) {
          const uid = user.uid
          db.collection('users').doc(uid).get()
          .then(snapshot => {
              const data = snapshot.data()

            //   siginInaction を呼び出して以下の情報に変更する
              dispatch(signInAction({
                  isSignedin: true,
                  role: data.role,
                  uid: uid,
                  username: data.username
              }))

              //認証後に移動
              dispatch(push('/'))
          })
      }
     })
 }
}

export const signOut = () => {
    return async (dispatch) => {
        auth.signOut()
        .then(()=> {
            dispatch(signOutAction());
            dispatch(push('/signin'))
        })
    }
}

export const ResetPassword = (email) => {
    return async (dispatch) => {
        if(email === "") {
            alert("必須項目が見入力です")
            return false
        } else {
            auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('メールを送りました')
                dispatch(push('/signin'))
            }).catch(() => {
                alert('失敗しました')
            })
        }
    }
}