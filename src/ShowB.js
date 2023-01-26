import React from "react";

var listOfImages=[]



class Show extends React.Component{

 importAll(r){
    return r.keys().map(r);
  }
  componentWillMount(){
    listOfImages=this.importAll(require.context('./data/', false, /\.(png|jpe?g|svg)$/));    
  }
  render(){

function sleep(time){
	 return new Promise(resolve => setTimeout(resolve, time))
}

function random_with_range( max,min){//this function is working...
  min=Math.ceil(min);max=Math.floor(max);
  return Math.floor(Math.random()*(max-min)+min);
  }


function Driver(){
	// const [refresh, setRefresh]=React.useState(0);
  const [index ,setIndex]=React.useState(0); 
const len=listOfImages.length

for(let i=0;i<10;i++){


sleep(15000).then(()=>{

setIndex(random_with_range(0, len))
   // setRefresh(Math.random())
})

}

const myStyle_horizontal={
    width:"310px",
    height:"270px",
    padding:"5px",
    borderRadius:"15px",
    border:"2px solid #555"
  }

return(
<div>
<img style={myStyle_horizontal} src={listOfImages[index]} alt=""/>
</div>
  )



}

  	return(
<div>
		
		<Driver />
</div>
);
  }

}
export default Show;