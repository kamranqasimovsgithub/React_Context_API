import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {
    const context = useContext(BooksContext);
    console.log(context);

    const totalCartAmount = context.state.cart.reduce(
        (total, book) => ( total = total + book.price*book.count ),
        0).toFixed(2);
    console.log('Total:', totalCartAmount);

    const totalCartCount = context.state.cart.reduce(
        (total, book) => ( total = total + book.count ),
        0).toFixed(0);
    console.log('totalCartCount:', totalCartCount);



  return (
    <div>
      <h2>
        <Link to="/">Kitab siyahısı</Link> <span>Səbətim: ({totalCartCount})</span>
      </h2>

      <h3>Ümumi məbləğ: {totalCartAmount} $</h3>

        {
            context.state.cart.map(book => 
            <div className="book" key={book.id}>
                <img
                src={book.image}
                alt={book.name}
                />
                <div>
                <h4>Adı: {book.name}</h4>
                <p>Müəllif: {book.author}</p>
                <p>Qiymət: {book.price}</p>
                <p>Cəmi: { (book.price * book.count).toFixed(2) } $ </p>
                <p>Səbətinizdə bu kitabdan { book.count } ədəd var.</p>
                <button onClick={()=>context.decrease(book.id)}>-</button>
                <button onClick={()=>context.removefromCart(book.id)}>
                    Səbətdən çıxar
                </button>
                <button onClick={()=>context.increase(book.id)}>+</button>
                </div>
            </div>)}      
    </div>
  );
};

export default Cart;