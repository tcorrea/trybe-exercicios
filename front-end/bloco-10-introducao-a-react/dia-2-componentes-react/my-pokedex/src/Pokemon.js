import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render(){
    const {name, type, averageWeight, image, moreInfo} = this.props.data;
    return (
      <>
        <img src={image} alt="" />    
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        <a href={moreInfo} target="_blank" rel="noreferrer">Mais info</a>
        <br />
        <br />
        <hr />
      </>
    )
  }
}

Pokemon.protoType = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string,
  moreInfo: PropTypes.string
}

export default Pokemon;