import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToFavorites } from "../../redux/features/favorite/favorites";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(book));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-x-3">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={getImgUrl(book?.coverImage)}
              alt={book?.title}
              className="w-full bg-cover p-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl py-3 font-semibold hover:text-blue-600">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600">
            {book?.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            Rs {book?.newPrice}{" "}
            <span className="line-through font-normal ml-5">
              Rs {book?.oldPrice}
            </span>
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="btn-primary px-2 space-x-3 flex items-center"
            >
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleAddToFavorites}
              className="btn-primary px-2 space-x-3 flex items-center"
            >
              <HiOutlineHeart />
              <span>Favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
