let img_container={
    1:"images/dice1.png",
    2:"images/dice2.png",
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png"
}

console.log(`${img_container[1]}`)

document.querySelector("button").addEventListener("click",()=>{
    let value1=Math.floor(Math.random()*6+1)
    let value2=Math.floor(Math.random()*6+1)
    if(value1>value2){
        document.querySelector("h1").innerHTML="Player 1 Wins"
         document.getElementById("p1").src="flag.svg"
          document.getElementById("p2").src=""
    }else if(value2>value1){
         document.querySelector("h1").innerHTML="Player 2 Wins"
         document.getElementById("p2").src="flag.svg"
          document.getElementById("p1").src=""
    }else{
        document.querySelector("h1").innerHTML="Tie"
        document.getElementById("p2").src="flag.svg"
         document.getElementById("p1").src="flag.svg"
    }
    document.getElementById('die1').src=`${img_container[value1]}`
    document.getElementById('die2').src=`${img_container[value2]}`
})

document.querySelector(".heading").addEventListener("click",()=>{
    let value1=Math.floor(Math.random()*6+1)
    let value2=Math.floor(Math.random()*6+1)
    if(value1>value2){
        document.querySelector("h1").innerHTML="Player 1 Wins"
         document.getElementById("p1").src="flag.svg"
          document.getElementById("p2").src=""
    }else if(value2>value1){
         document.querySelector("h1").innerHTML="Player 2 Wins"
         document.getElementById("p2").src="flag.svg"
          document.getElementById("p1").src=""
    }else{
        document.querySelector("h1").innerHTML="Tie"
        document.getElementById("p2").src="flag.svg"
         document.getElementById("p1").src="flag.svg"
    }
    document.getElementById('die1').src=`${img_container[value1]}`
    document.getElementById('die2').src=`${img_container[value2]}`
})