import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../App.jsx';
import FiveStar from '../FiveStar.jsx';


const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  // border: 1px solid #ccc;
  background-color: rgba(220,152,245,0.3);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;


  .product__topStar {
    position: absolute;
    z-index: 1;
    right: 0;
  }

  .div__pic {
    width: 100%;
    height: 9em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    overflow: hidden;
    :hover {
      cursor: pointer;
    }
  }

  .pic {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
  }

  p {
    margin: 5px;
    font-size: .7em;
  }

  .outfitBtnX {
    color: white;
    font-weight: bold;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

`;


const Star = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1em;
  color: #ddd;

  &:after {
    font-family: FontAwesome;
    content: "\f005";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    color: yellow;
  }

  z-index: 1;
`;


const ButtonWrap = styled.div`
  height: 100%;
  width: 100%;
  background: green;
`;


function ProductCard({
  product, relatedProductsItem, index, addNewOutfit, outfitPicks, openModal,
}) {
  const { productId, setProductId } = useContext(GlobalContext);

  if (!product) {
    return (
      <div>
        <CardStyle
          className="product__card"
          id="productCard"
          data-testid="productCard"
          onClick={addNewOutfit}
        >
          <div>
            <div className="div__pic">
              <p className="pic">
                +
              </p>
            </div>
            <div className="product__info">
              <p>Click to add Outfit</p>
            </div>
          </div>
        </CardStyle>
      </div>
    );
  }

  return (
    <div>
      <CardStyle
        className="product__card"
        id="productCard"
        data-testid="productCard"
      >
        <div>
          <div className="div__pic">
            <div className="product__topStar">
              {outfitPicks ? (
                <button
                  type="button"
                  className="outfitBtnX"
                  onClick={console.log('Outfit Click!')}
                >
                  X
                </button>
              ) : (
                <Star
                  className="star fa fa-star"
                  data-testid="full-star"
                  onClick={() => {
                    console.log('Star clicked!');
                    openModal([product.product_id, productId]);
                  }}
                />
              )}

            </div>
            <ButtonWrap onClick={() => setProductId(product.product_id)}>
              <img
                src={product.results[0].photos[0].thumbnail_url ? product.results[0].photos[0].thumbnail_url
                  : ('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k'
                  + '=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=')}
                // nature picture for alt
                alt="placeholder for Product img"
                className="pic"
              />
            </ButtonWrap>
          </div>
          <div className="product__info">
            {relatedProductsItem[index] && (
              <div>
                <p>{relatedProductsItem[index].category}</p>
                <p>{relatedProductsItem[index].name}</p>
                <p>{relatedProductsItem[index].slogan}</p>
                <p>
                  $
                  {relatedProductsItem[index].default_price}
                </p>
              </div>
            )}
            <FiveStar rating={Math.random() * (4 - 1) + 1} />
          </div>
        </div>
      </CardStyle>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  relatedProductsItem: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  outfitPicks: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProductCard;

