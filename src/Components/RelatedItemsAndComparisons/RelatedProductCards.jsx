import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../App.jsx';
import FiveStar from '../FiveStar.jsx';


const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: #fafafa;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
  }

  .product__topStar {
    position: absolute;
    z-index: 1;
    right: 0;
  }

  .div__pic {
    width: 100%;
    height: 9em;
    position: relative;
    overflow: hidden;
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

`;



function ProductCard({
  product, relatedProductsItem, index, addNewOutfit,
}) {
  const { productId, setProductId } = useContext(GlobalContext);
  // const { setAddNewOutfit } = useContext(outfitContext);

  if (!product) {
    return (
      <div>
        <CardStyle
          className="product__card"
          id="productCard"
          data-testid="productCard"
          onClick={() => addNewOutfit((prevStuff) => prevStuff + 1)}
        // change this to add to outfits
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
        onClick={() => setProductId(product.product_id)}
      >
        <div>
          <div className="div__pic">
            <div className="product__topStar">Star</div>
            <img
              src={product.results[0].photos[0].thumbnail_url}
              alt="placeholder for Product img"
              className="pic"
            />
          </div>
          <div className="product__info">
            {console.log('relatedProductsItem: ', relatedProductsItem)}
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
            {console.log('IN PRODUCT CARD ', relatedProductsItem)}
            <FiveStar ratings={3} />
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
};

export default ProductCard;


























// ---------------------------------------OldStuff----------------------------------------------






// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import FiveStar from '../FiveStar.jsx';

// // dont need
// import {
//   productData, productIdData, productStyleData, relatedProductsData,
// } from './other_test_data/othertestdata.js';

// // dont need
// const ratings = {
//   1: '1',
//   2: '2',
//   3: '8',
//   4: '2',
//   5: '4',
// };

// const CardStyle = styled.div`
//   border: solid;
//   background: #fafafa;
//   z-index: 0;
//   width: 12.5rem;
//   height: 100%;
//   margin-right: 1em;

//   .product__topStar {
//     position: absolute;
//     z-index: 1;
//     right: 0;
//   }

//   .div__pic {
//     width: 100%;
//     height: 12rem;
//     position: relative;
//     overflow: hidden;
//   }

//   .pic {
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//   }

//   p {
//     margin: 5px;
//   }

// `;


// function ProductCard({ product, relatedProductsItem, index }) {

//   return (

//     <div>
//       {
//         product.results[0].photos[0].thumbnail_url && (
//           <CardStyle className="product__card" id="productCard" data-testid="productCard">
//             <div>
//               <div className="div__pic">
//                 <div className="product__topStar">Star</div>
//                 <img
//                   src={product.results[0].photos[0].thumbnail_url}
//                   alt="placeholder for Product img"
//                   className="pic"
//                 />
//               </div>
//               <div className="product__info">
//                 {console.log('relatedProductsItem: ', relatedProductsItem)}
//                 {relatedProductsItem[index] && (
//                   <div>
//                     <p>{relatedProductsItem[index].category}</p>
//                     <p>{relatedProductsItem[index].name}</p>
//                     <p>{relatedProductsItem[index].slogan}</p>
//                     <p>
//                       $
//                       {relatedProductsItem[index].default_price}
//                     </p>
//                   </div>
//                 )}
//                 {console.log('IN PRODUCT CARD ', relatedProductsItem)}
//                 <FiveStar ratings={ratings} />
//               </div>
//             </div>
//           </CardStyle>
//         )
//       }
//     </div>

//   );
// }

// ProductCard.propTypes = {
//   product: PropTypes.objectOf(PropTypes.any).isRequired,
//   relatedProductsItem: PropTypes.objectOf(PropTypes.any).isRequired,
//   index: PropTypes.number.isRequired,
// };

// export default ProductCard;



// Root div of Card will be clickable



// function ProductCard({ product, relatedProductsItem, index }) {

//   return (
//     <CardStyle className="product__card" id="productCard" data-testid="productCard">
//       <div className="div__pic">
//         <div className="product__topStar">Star</div>
//         {product.results[0].photos[0].thumbnail_url && (
//           <img
//             src={product.results[0].photos[0].thumbnail_url}
//             alt="placeholder for Product img"
//             className="pic"
//           />
//         )}
//       </div>
//       <div className="product__info">
//         {console.log('relatedProductsItem: ', relatedProductsItem)}
//         {relatedProductsItem[index] && (
//           <div>
//             <p>{relatedProductsItem[index].category}</p>
//             <p>{relatedProductsItem[index].name}</p>
//             <p>{relatedProductsItem[index].slogan}</p>
//             <p>
//               $
//               {relatedProductsItem[index].default_price}
//             </p>
//           </div>
//         )}
//         {/* <p>{relatedProductsItem.category}</p>
//         <p>{relatedProductsItem.name}</p>
//         <p>{relatedProductsItem.slogan}</p>
//         <p>
//           $
//           {relatedProductsItem.default_price}
//         </p> */}
//         {console.log('IN PRODUCT CARD ', relatedProductsItem)}
//         <FiveStar ratings={ratings} />
//       </div>
//     </CardStyle>
//   );
// }
