import './CakeCategories.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Chocolate Cakes', imageUrl: './chocolate_cream.jpeg', price: "$50" },
  { id: 2, name: 'Fruit Cakes', imageUrl: './fruit.jpg', price: "$60" },
  { id: 3, name: 'Custom Cakes', imageUrl: './penguin_cake.jpeg', price: "$100" },
  { id: 4, name: 'Kit Kat cake', imageUrl: './Kit-Kit-Cake.jpg', price: "$40" },
  { id: 5, name: 'Rainbow cake', imageUrl: './rainbow.jpeg', price: "$80" },
  { id: 6, name: 'Fresh Flower Cake', imageUrl: './freah_flower.jpeg', price: "$55" }
];

function CakeCategories() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    
    navigate(`/cakeDetails1/${id}`);
  };

  return (
    <div className="cake-categories">
      <h2>Cake Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-card" onClick={() => handleCardClick(category.id)}>
            <h3>{category.name}</h3>
            <img src={category.imageUrl} alt={category.name} style={{ width: '200px', height: '200px', borderRadius: '8px' }} />
            <h3>{category.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeCategories;
