export default function List() {
    let 상품 = ['Tomatoes', "Pasta", "Coconut"]

    return (
        <div>
            <h4 className="title-sub">상품목록</h4>
            {
                상품.map((내용, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{내용} $40</h4>
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