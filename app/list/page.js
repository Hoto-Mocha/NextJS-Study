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
        </div>
    )
}