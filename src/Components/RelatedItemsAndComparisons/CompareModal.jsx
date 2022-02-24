import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';



function CompareModal({ closeModal, cardProductID, overViewProductID }) {
  const [currentCardProduct, setCurrentCardProduct] = useState({});
  const [currentCardProductStyle, setCurrentCardProductStyle] = useState({});
  const [currentOverviewProduct, setCurrentOverviewProduct] = useState({});
  const [currentOverviewProductStyle, setCurrentOverviewProductStyle] = useState({});


  useEffect(() => {
    axios.get(`shopdata/products/${cardProductID}`)
      .then((res) => {
        console.log(res.data);
        setCurrentCardProduct(res.data);
        return axios.get(`shopdata/products/${cardProductID}/styles`)
          .then((response) => setCurrentCardProductStyle(response.data))
          .catch((error) => (console.log(error)));
      })
      .catch((err) => (console.log(err)));
  }, []);
  // Get Card Product Info and put it in state

  useEffect(() => {
    axios.get(`shopdata/products/${overViewProductID}`)
      .then((res) => {
        setCurrentOverviewProduct(res.data);
        return axios.get(`shopdata/products/${overViewProductID}/styles`)
          .then((response) => setCurrentOverviewProductStyle(response.data))
          .catch((error) => (console.log(error)));
      })
      .catch((err) => (console.log(err)));
  }, []);
  // Get Overview Card Info and put it in state

  const BackdropStyle = styled.div`
  .backdrop {
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 11;
  }
`;

  const ModalStyle = styled.div`
  width: 60vw;
  margin: 1px auto;
  height: 350px;
  position: relative;
  top: -17em;
  border-radius: 10px;
  z-index: 15;

  button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
    position: absolute;
  }

  .xBtn {
    right: 0;
  }

  .cancelBtn {
    // margin: 2px;
    bottom: 0;
    right: 43.5%;
  }
`;

  const GridStyle = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  // gap: 10px;
  background-color: rgba(220,152,245);
  border-radius: 10px;

  .cardPicDiv {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
    overflow: hidden;
  }

  .overviewPicDiv {
    grid-column: 3 / 5;
    grid-row: 1 / 4;
    // border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }

  .modalPic {
    block-size: fit-content;
    width: 100%;
  }

  .cardProductInfo{
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .overviewProductInfo{
    grid-column: 3 / 5;
    grid-row: 4 / 5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 7px;
    margin-bottom: 5px;
    margin-left: 3px;
  }

`;

  if (currentCardProductStyle.results && currentOverviewProductStyle.results) {
    return (
      <BackdropStyle>
        <div className="backdrop" />
        <ModalStyle className="modalBackground" data-testid="modal-style">
          <button type="button" className="xBtn" onClick={() => closeModal(false)}> X </button>
          <button type="button" className="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
          <GridStyle data-testid="grid-style">
            <div className="cardPicDiv">
              <img
                src={currentCardProductStyle.results[0].photos[0].thumbnail_url
                  ? currentCardProductStyle.results[0].photos[0].thumbnail_url
                  : ('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k'
                    + '=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=')}
                alt="placeholder for Product img"
                className="modalPic"
              />
            </div>
            <div className="cardProductInfo">
              <p>
                $
                {currentCardProduct.default_price}
              </p>
              <p>{currentCardProduct.name}</p>
              <p>{currentCardProduct.category}</p>
              <p>{currentCardProduct.slogan}</p>
            </div>

            <div className="overviewPicDiv">
              <img
                src={currentOverviewProductStyle.results[0].photos[0].thumbnail_url
                  ? currentOverviewProductStyle.results[0].photos[0].thumbnail_url
                  : ('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k'
                    + '=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=')}
                alt="placeholder for Product img"
                className="modalPic"
              />
            </div>
            <div className="overviewProductInfo">
              <p>
                $
                {currentOverviewProduct.default_price}
              </p>
              <p>{currentOverviewProduct.name}</p>
              <p>{currentOverviewProduct.category}</p>
              <p>{currentOverviewProduct.slogan}</p>
            </div>
          </GridStyle>
        </ModalStyle>
      </BackdropStyle>
    );
  }

  return (<h1>Hello World!</h1>);

}

CompareModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  cardProductID: PropTypes.number.isRequired,
  overViewProductID: PropTypes.number.isRequired,
};

export default CompareModal;
