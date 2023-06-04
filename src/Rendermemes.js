import React from "react";

function sleep(time){
	 return new Promise(resolve => setTimeout(resolve, time))
}
function random_with_range( max,min){//this function is working...
  min=Math.ceil(min);max=Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
 }





function Rendermemes(props){

const [address,setAddress]=React.useState(0);

// console.log(props.arr);


const update=()=>{
	setAddress(random_with_range(0,props.arr.length));
	
}

console.log(props.arr);



for(let i=0;i<1;i++){


sleep(10000).then(()=>{

setAddress(random_with_range(0, props.arr.length))
   	
})
}
const myStyle_horizontal={
    width:"300px",
    height:"250px",
    padding:"2px",
    borderRadius:"15px",
    border:"2px solid #555"
  }
  const divStyle={
  	padding: "2%",
  	width:"320px",
  	margin:"auto"
  }

	return(
<div style={divStyle}>
<br></br>
<img src={props.arr[address]} style={myStyle_horizontal} alt="memes" loading="lazy" title={address.toString()}/>
<br></br>
<button onClick={update}>Next Meme</button>
<br></br>
<br></br>
<br></br>
</div>
		)
}

export default Rendermemes;