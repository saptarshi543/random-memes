import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "xhishdi",
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MSG_ID}`,
  appId: `${process.env.REACT_APP_APPID}`
};


function listAll(folder){
	const storageRef=firebase.storage().ref();
	var listRef=storageRef.child(folder);

	let count=[];

	listRef
	.listAll()
	.then((res)=>{
		// console.log(res);
		
		res.items.forEach((itemRef)=>{
			itemRef.getDownloadURL().then((url)=>{
				// console.log(url);
				
				count.push(url);
			})
		})
	})
	.catch((error)=>{
		console.log(error);
	});
//console.log("len "+count.length);
for(let i=0;i<count.length;i++){
	//console.log(i+" "+count[i]);
}
//console.log(count);
return count;

};

firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();

export { storage, listAll, firebase as default };