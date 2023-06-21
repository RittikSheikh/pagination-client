
const Cards = ({ product }) => {

    const { img, name, price, ratings, stock } = product;

    return (
       <div className="bg-blue-400 p-5 rounded-sm">
         <div className="card grid grid-cols-2 gap-5">
            <img className="" src={img} alt="product-img" />
            <div className="info">
                <p className="text-violet-600 font-semibold">Name: {name}</p>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
                <p>Stock: {stock}</p>
            </div>
        </div>
            <button className="btn btn-primary w-full mt-5">Buy Now</button>
       </div>
    );
};

export default Cards;