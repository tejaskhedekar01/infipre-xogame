import React, { useState,useEffect } from "react";
import './index.css'

export default function Xocomponent(){
    const [currentValue, setCurrentValue] = useState('X')
    const [matrix, setmatrix] = useState([[null,null,null],[null,null,null],[null,null,null]])

    useEffect(()=>{
    },[matrix,currentValue])

    function updatematrixvalue(r,c){
        let currentmatrix = matrix
        let currentvalue = currentValue
        currentmatrix[r][c] = currentValue
        console.log(currentmatrix)
        setmatrix(currentmatrix)
        if(currentValue === 'X'){
            setCurrentValue('O')
        }else{
            setCurrentValue('X')
        }

        //Horizontal
        if(currentmatrix[0][0] === 'X' && currentmatrix[0][1] === 'X' && currentmatrix[0][2] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[1][0] === 'X' && currentmatrix[1][1] === 'X' && currentmatrix[1][2] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[2][0] === 'X' && currentmatrix[2][1] === 'X' && currentmatrix[2][2] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }
        //Verticle
        else if(currentmatrix[0][0] === 'X' && currentmatrix[1][0] === 'X' && currentmatrix[2][0] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[0][1] === 'X' && currentmatrix[1][1] === 'X' && currentmatrix[2][1] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[0][2] === 'X' && currentmatrix[1][2] === 'X' && currentmatrix[2][2] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }
        //Diagonal
        else if(currentmatrix[0][0] === 'X' && currentmatrix[1][1] === 'X' && currentmatrix[2][2] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[2][0] === 'X' && currentmatrix[1][1] === 'X' && currentmatrix[2][0] === 'X'){
            alert('Player  ' + currentvalue + '  Won')
        }

        //O
        else if(currentmatrix[0][0] === 'O' && currentmatrix[0][1] === 'O' && currentmatrix[0][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[1][0] === 'O' && currentmatrix[1][1] === 'O' && currentmatrix[1][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[2][0] === 'O' && currentmatrix[2][1] === 'O' && currentmatrix[2][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }
        //Verticle
        else if(currentmatrix[0][0] === 'O' && currentmatrix[1][0] === 'O' && currentmatrix[2][0] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[0][1] === 'O' && currentmatrix[1][1] === 'O' && currentmatrix[2][1] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[0][2] === 'O' && currentmatrix[1][2] === 'O' && currentmatrix[2][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }
        //Diagonal
        else if(currentmatrix[0][0] === 'O' && currentmatrix[1][1] === 'O' && currentmatrix[2][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }else if(currentmatrix[2][0] === 'O' && currentmatrix[1][1] === 'O' && currentmatrix[0][2] === 'O'){
            alert('Player  ' + currentvalue + '  Won')
        }


    }
    return (
        <div className="container">
           <table>
            <tbody>
            <tr className="cell-border">
                <td onClick={()=>{updatematrixvalue(0,0)}} className="cell-border">{matrix[0][0]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(0,1)}}>{matrix[0][1]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(0,2)}}>{matrix[0][2]}</td>
            </tr>
            <tr className="cell-border">
                <td className="cell-border" onClick={()=>{updatematrixvalue(1,0)}}>{matrix[1][0]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(1,1)}}>{matrix[1][1]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(1,2)}}>{matrix[1][2]}</td>
            </tr>
            <tr className="cell-border">
                <td className="cell-border" onClick={()=>{updatematrixvalue(2,0)}}>{matrix[2][0]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(2,1)}}>{matrix[2][1]}</td>
                <td className="cell-border" onClick={()=>{updatematrixvalue(2,2)}}>{matrix[2][2]}</td>
            </tr>
            </tbody>
           </table>

           <div style={{'fontWeight': 'bold'}}>
                Next Player: {currentValue}
           </div>
        </div>
    )
}
