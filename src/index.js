import headerLayout from './header-banner.js'
import sideLayout from './side-banner.js'
import bodyLayout from './body-banner.js'
import taskGrouping from './task-grouping.js'
import './style.css' 

import {app} from './firebase.js'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

headerLayout();
sideLayout();
bodyLayout();
taskGrouping();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInBtn = document.querySelector('.sign-in-btn')
signInBtn.addEventListener('click',()=>{
    signInWithPopup(auth, provider)
    .then((result)=> {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user
        console.log(token,user)
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

    })
})
