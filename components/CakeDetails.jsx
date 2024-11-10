import { useParams } from 'react-router-dom';  // Import useParams to get URL parameters
import { useState } from 'react';
import './CakeDetails.css';


const cakeDetails1 = [
  { id: 1, name: 'Chocolate Cakes', imageUrl: './chocolate_cream.jpeg', price: "$50" },
  { id: 2, name: 'Fruit Cakes', imageUrl: './fruit.jpg', price: "$60" },
  { id: 3, name: 'Custom Cakes', imageUrl: './penguin_cake.jpeg', price: "$100" },
  { id: 4, name: 'Kit Kat cake', imageUrl: './Kit-Kit-Cake.jpg', price: "$40" },
  { id: 5, name: 'Rainbow cake', imageUrl: './rainbow.jpeg', price: "$80" },
  { id: 6, name: 'Fresh Flower Cake', imageUrl: './freah_flower.jpeg', price: "$55" }
];

function CakeDetails() {
  const { id } = useParams();  
  const [quantity, setQuantity] = useState(1);

  
  const cake = cakeDetails1.find(cake => cake.id === parseInt(id));
  console.log(cake);
  
  if (!cake) {
    return <div>Cake not found!</div>;
  }
  
  const handleAddToCart = () => {
    alert(`Added ${quantity} cakes to cart`);
    
  }

  return (
    <div className="cake-details">
      <h2>{cake.name}</h2>  
      <img src={cake.imageUrl} alt={cake.name} style={{ width: '200px', height: '200px', borderRadius: '8px' }} />  
      <p>Price: {cake.price}</p> 
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}  
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
 
  );
}

export default CakeDetails;
