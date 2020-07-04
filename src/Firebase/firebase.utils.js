import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCHYRISBWT-ytodu1TlyArVmztEA5bYs6U",
    authDomain: "weclothdb.firebaseapp.com",
    databaseURL: "https://weclothdb.firebaseio.com",
    projectId: "weclothdb",
    storageBucket: "weclothdb.appspot.com",
    messagingSenderId: "22215127681",
    appId: "1:22215127681:web:786ef3abd7034719901380",
    measurementId: "G-3EKM7YL8PD"
  };

  export const createUserProfileDocument =async (userAuth,additionalData) =>
  {
    if(!userAuth) return ;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    { console.log(userAuth);
      const {displayName ,email}=userAuth;
      const createdAt =new Date();
        try{
          await userRef.set(
            {displayName,
              email,
              createdAt,
              ...additionalData
            }
          )
        }
        catch(error)
        {
          console.log('error Creating user',error.message);

        }
    }
    return userRef;
  };
  
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;