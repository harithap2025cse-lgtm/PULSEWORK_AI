import Card from "./Card";
function Watches(){
    return(
        <>
        <h1>Watches</h1>
        <div className="box1">
            <Card  name="Casio" image="https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Casio-Edifice-WorldTimer-2.jpg?v=1693320270" price="2,500" />
            <Card name="Moover" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjiFRZEgWfBsyaIh0guKWNRPR4hDvGXx2hazWp1rBZw&s" price="5,995" />
            <Card name="Titan"  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNx0R32k46jAl-xpE8Z1rJ_3EXcn8uZnUoQb4PNrQQlQ&s=10" price="6,400" />
        </div>
        </>
    )
}
export default Watches;