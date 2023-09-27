import Card from "./Card";
 const Tours=({tours,removeTour })=>{
    return (
        <div className="container">
            <h2 className="title">Plan With Ashu</h2>
            <div className="cards">
                {tours.map((tour)=>{
                    return <Card key={tours.id} {...tour} removeTour={removeTour}></Card>
                })}
            </div>
        </div>
)};

export default Tours;