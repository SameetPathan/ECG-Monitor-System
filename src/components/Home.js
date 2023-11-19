import React,{useEffect,useState} from 'react';
import Loader from './Loader';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import '../footer.css';

const firebaseConfig = {
  apiKey: "AIzaSyBknQSAIn196-nDYPpCKUozd0Uns5XEFSM",
  authDomain: "ecg-monitor-system.firebaseapp.com",
  databaseURL: "https://ecg-monitor-system-default-rtdb.firebaseio.com",
  projectId: "ecg-monitor-system",
  storageBucket: "ecg-monitor-system.appspot.com",
  messagingSenderId: "961628280196",
  appId: "1:961628280196:web:86de51e813f07f156fb9d1"
};
const fire_app = initializeApp(firebaseConfig);
function Home() {

  const [appurl, setappurl] = useState("");

  const fetchappurlFromFirebase = () => {
    const db = getDatabase(fire_app);
    const appurlRef = ref(db, 'app_url');

    onValue(appurlRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setappurl(data);
        console.log(data)
      } 
    }, (error) => {
    
      console.log(error)
    });
  };

  useEffect(() => {
    fetchappurlFromFirebase();
  }, []);

  return (
    <>
    <Loader></Loader>
    <div className='container'>
    <div class="card text-center mt-5">
        <div class="card-header bg-success ">
        <span className='text-white' style={{fontSize:"20px"}}>ML ECG MONITOR APK</span>  
        </div>
        <div class="card-body">
          <h5 class="card-title">Download You Android .apk file here and install <span><div class="blink">Download Available</div>
</span></h5>
         <a href="https://drive.google.com/uc?export=download&id=1oKbegtEI4oavbJq8u4Y8nwIfx8BWs778"  class="btn btn-primary">Download</a>
   

        </div>
        <div class="card-footer text-muted">
         Updated on 19/11/2023        </div>
      </div>
      </div>

      
    </>
  );
}

export default Home
