import React from "react";
import { listAll } from "./index.js";
import Rendermemes from "../Rendermemes.js";


function Show(){
const [urls,setUrl]=React.useState({});

React.useEffect(() => {
	// console.log("MOUNTED");


//var tmp=[]
//tmp=listAll("assets/");
//console.log("tmp\n"+tmp);

 let listFiles= listAll("normalmemes/");
// console.log(listFiles);
 setUrl(listFiles);
// console.log("STate..\n");



// console.log(listFiles);
},[])





	return(
<div>
<Rendermemes arr={urls}/>
   {/*   <button onClick={listFiles}>Click ME to fetch files</button>    */}

</div>
		)
}

export default Show;
