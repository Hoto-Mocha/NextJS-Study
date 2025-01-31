'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', "Pasta", "Coconut"]
    let [수량, 수량변경] = useState([0, 0, 0])

    return (
        <div>
            <h4 className="title-sub">상품목록</h4>
            {/* <span> {수량[0]} </span>
            <button onClick={() => {
                let copy = [...수량]
                copy[0]++
                수량변경(copy)
            }}>+</button> */}
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{a} $40</h4>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                let tempArr = [...수량]
                                tempArr[i]++;
                                수량변경(tempArr)
                            }}>+</button>
                            <button onClick={() => {
                                let tempArr = [...수량]
                                tempArr[i]--;
                                수량변경(tempArr)
                            }}>-</button>
                        </div>
                    )
                })
            }
            {/* <Button color="blue"/> */}
        </div>
    )
}

function Button(props) {
    return (
        <div>
            <button style={{backgroundColor: props.color, width: "60px", height: "30px", border: "0", borderRadius: "3px"}}>버튼</button>
        </div>
    )
}