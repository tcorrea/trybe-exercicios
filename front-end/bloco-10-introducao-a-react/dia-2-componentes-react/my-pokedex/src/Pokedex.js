import React, {Component} from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render(){
    return (
      <>
        {data.map((item) => <Pokemon data={item} key={item.id} />)};  
      </>
    );
  }
}

export default Pokedex;