import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearItem,
  removeFromFavorites,
} from "../../../redux/features/favorite/favorites";
import { getImgUrl } from "../../../utils/getImgUrl";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeFromFavorites({ _id: bookId }));
  };

  const handleClear = (bookId) => {
    dispatch(clearItem());
  };

  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">Favorites</div>
            <div className="ml-3 flex h-7 items-center ">
              <button
                type="button"
                onClick={handleClear}
                className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
              >
                <span className="">Clear Favorites</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              {favorites.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {favorites.map((book) => (
                    <li key={book?._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={`${getImgUrl(book?.coverImage)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to="/">{book?.title}</Link>
                            </h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Category: </strong>
                            {book?.category}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Description: </strong>
                            {book?.description}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-row-reverse justify-between space-y-2 text-sm">
                          <div className="flex">
                            <button
                              onClick={() => handleRemove(book._id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove From Favorite
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p> No favorite found!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
