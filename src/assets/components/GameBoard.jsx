import React, { useEffect, useState } from 'react'

const GameBoard = () => {
    
    const [FirstPlayerTurn, setFirstPlayerTurn ] = useState(true)
    const [boradBoxes, setBoardBoxes ] = useState(new Array(9).fill(""))
    const [isWinner , setIsWinner] = useState(false)

    const handleBoxClick = (i) => {
        console.log("working")
        let newBoardBox = [...boradBoxes]
        newBoardBox[i] = FirstPlayerTurn ? "X": "O" 
        setFirstPlayerTurn(pre=>!pre)
        setBoardBoxes(newBoardBox)
        

    }

    useEffect(()=>{
        if(boradBoxes[0] !=="" && boradBoxes[0] === boradBoxes[1] && boradBoxes[0] === boradBoxes[2] ||
            boradBoxes[3] !=="" && boradBoxes[3] === boradBoxes[4] && boradBoxes[4] === boradBoxes[5]  ||
            boradBoxes[6] !=="" &&   boradBoxes[6] === boradBoxes[7] && boradBoxes[7] === boradBoxes[8] ||
            boradBoxes[0] !=="" &&   boradBoxes[0] === boradBoxes[4] && boradBoxes[4] === boradBoxes[8] ||
            boradBoxes[2] !=="" &&   boradBoxes[2] === boradBoxes[4] && boradBoxes[4] === boradBoxes[6] ||
            boradBoxes[0] !=="" &&   boradBoxes[0] === boradBoxes[3] && boradBoxes[3] === boradBoxes[6] ||
            boradBoxes[1] !=="" &&   boradBoxes[1] === boradBoxes[4] && boradBoxes[4] === boradBoxes[7] ||
            boradBoxes[2] !=="" &&   boradBoxes[2] === boradBoxes[5] && boradBoxes[2] === boradBoxes[8] 
        
        
        ){

                setIsWinner(true)
        }


    },[boradBoxes])

    const handleReset =()=>{
        setBoardBoxes(boradBoxes.map((e)=>""))
        setIsWinner(false)

    }



  return (<>

<button className='btn' onClick={handleReset} >Reset</button>
{!isWinner && <h3 style={{textAlign:"center" , color: "green"}} >{FirstPlayerTurn ? "1st Player Turn" : "2nd Player Turn" }</h3>
}
    <div className='board'>

        {boradBoxes.map((arr,i)=>(
            <button disabled={arr !== "" || isWinner} onClick={()=>handleBoxClick(i)}  className='borad-div'>
                {arr}
                {/* {FirstPlayerTurn ? "X": "O"} */}
            </button>
        ))}


    </div>
{isWinner &&    <div>
        <h2 style={{color:"red", textAlign:'center'}}>Winnter is {FirstPlayerTurn? "Second Player": "First Player" }</h2>
    </div>}
    
    </>

  )
}

export default GameBoard