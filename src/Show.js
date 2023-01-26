import React from "react";

function random_file() {
	var fs=require('graceful-fs')
}

function sleep(time){
	 return new Promise(resolve => setTimeout(resolve, time))
}

function Driver(){
	const [refresh, setRefresh]=React.useState(0);
for(let i=0;i<10;i++){

// sleep(5000).then(()=>{
//    console.log(i);
//    setRefresh(Math.random())
// })

}

}

function Show(){

	return(
<div>
		<p>Show</p>
		<Driver />
</div>
		);
}
export default Show;