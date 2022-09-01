import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../App';


const Products = ( props ) => {    
  const context  = useContext(BooksContext);
  //console.log(context);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => ( total = total + book.count ),
    0).toFixed(0);


  return (
    <div>
      <h2>
        <span>Kitab siyahısı</span>
        <Link to="/cart">Səbətim({totalCartCount})</Link>
      </h2>       
        {context.state.bookList.map(book=>(
            <div className='book' key={book.id}>
                <img src={book.image} alt={book.name}/>
                <div>
                    <h4>Adı: {book.name}</h4>
                    <p>Müəllifi: {book.author}</p>
                    <p>Qiyməti: {book.price} $</p>
                    <button onClick={()=>context.addToCart(book)}>Səbətə əlavə et</button>
                </div>
            </div>
        ))};     
    </div> 
  );
};

export default Products;
