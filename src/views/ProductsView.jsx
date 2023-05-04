import React, { Fragment } from "react";
import ItemListContainer from "../components/ItemListContainer";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products";
const URL_CATEGORY = "category";

const ProductsView = (props) => {
  const { category } = useParams();
  const final_url = category
    ? `${BASE_URL}/${URL_CATEGORY}/${category}`
    : BASE_URL;
  const { data, loading } = useFetch(final_url);

  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading ? (
            <h1>Estamos cargando el catálogo...</h1>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ItemListContainer data={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsView;
