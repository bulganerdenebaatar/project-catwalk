import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductCard from './RelatedProductCards.jsx';
import CompareModal from './CompareModal.jsx';


function ListBehavior({
  relatedProducts, relatedProductsItem, outfitPicks, addNewOutfit,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const WrapperStyle = styled.div`
  width: 80vw;
  margin: 1px auto;
  height: 250px;
  position: relative;

  // background: lightblue;
`;

  const ListStyle = styled.div`
  overflow: hidden;
  height: 100%
  box-sizing: border-box;

  // border: 2px solid green;
`;

  const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  transition: transform 0.5s;
  transform: translateX(-${activeIndex * 259}px);

  // border: 4px dotted red;
`;

  const CardContainerStyle = styled.div`
  width: 259px;
  flex-shrink: 0;
  height: 250px;
  padding-right: 15px;
  box-sizing: border-box;

  // border: 5px solid black;
`;

  const LeftArrow = styled.span`
  font-family: FontAwesome;
  font-size: 2em;
  content: &#Xf104;
  position: absolute;
  top: 50%;
  transfrom: translateY(-50%);
  color: rgba(100, 190, 250, ${activeIndex ? 1 : 0});
  :hover {
    cursor:${activeIndex ? 'pointer' : 'auto'}
  }
`;

  const RightArrow = styled.span`
  font-family: FontAwesome;
  font-size: 2em;
  content: &#Xf105;
  position: absolute;
  right: 0;
  top: 50%;
  transfrom: translateY(-50%);
  color: rgba(100, 190, 250, ${(activeIndex === relatedProducts.length - 1) ? 0 : 1});
  position: absolute;
  :hover {
    cursor: ${(activeIndex === relatedProducts.length - 1) ? 'auto' : 'pointer'};
  }
`;

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      const nextIndex = activeIndex + 1;
      if (nextIndex === relatedProducts.length) return;
      setActiveIndex(nextIndex);
    }

    if (direction === 'prev') {
      const prevIndex = activeIndex - 1;
      if (prevIndex < 0) return;
      setActiveIndex(prevIndex);
    }
  };


  if (outfitPicks === 1) {
    return (
      <WrapperStyle>
        <ListStyle>
          <ContainerStyle>
            <CardContainerStyle>
              <ProductCard addNewOutfit={addNewOutfit} />
            </CardContainerStyle>
            {relatedProductsItem ? relatedProducts.map((product, index) => (
              <CardContainerStyle>
                <ProductCard
                  product={product}
                  relatedProductsItem={relatedProductsItem}
                  index={index}
                  addNewOutfit={addNewOutfit}
                  outfitPicks={outfitPicks}
                />
              </CardContainerStyle>
            )) : console.log('No Outfits: ', relatedProductsItem)}
          </ContainerStyle>
        </ListStyle>
        <LeftArrow
          className="fas fa-angle-left fa-lg"
          type="button"
          value="left"
          onClick={() => handleArrowClick('prev')}
        />
        <RightArrow
          className="fas fa-angle-right fa-lg"
          type="button"
          value="right"
          onClick={() => handleArrowClick('next')}
        />
      </WrapperStyle>
    );
  }


  if (
    ((relatedProductsItem !== undefined && relatedProducts !== undefined)
      && (relatedProductsItem.length === relatedProducts.length)) && relatedProducts.length !== 0) {
    return (
      <>
        <WrapperStyle>
          <ListStyle>
            <ContainerStyle>
              {relatedProductsItem ? relatedProducts.map((product, index) => (
                <CardContainerStyle>
                  <ProductCard
                    product={product}
                    relatedProductsItem={relatedProductsItem}
                    index={index}
                    openModal={setOpenModal}
                  />
                </CardContainerStyle>
              )) : console.log('inside relatedItems; relatedProductsItem: ', relatedProductsItem)}
            </ContainerStyle>
          </ListStyle>
          <LeftArrow
            className="fas fa-angle-left fa-lg"
            type="button"
            value="left"
            onClick={() => handleArrowClick('prev')}
          />
          <RightArrow
            className="fas fa-angle-right fa-lg"
            type="button"
            value="right"
            onClick={() => handleArrowClick('next')}
          />
        </WrapperStyle>
        {openModal && (
          <CompareModal
            closeModal={setOpenModal}
            cardProductID={openModal[0]}
            overViewProductID={openModal[1]}
          />
        )}
      </>
    );
  }


  return (
    <div>
      Goodbye World
    </div>
  );

}

ListBehavior.propTypes = {
  relatedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  relatedProductsItem: PropTypes.arrayOf(PropTypes.object).isRequired,
  outfitPicks: PropTypes.number.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
};

export default ListBehavior;

