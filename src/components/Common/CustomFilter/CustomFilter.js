import React from 'react';
import {SelectStyle} from './style';
 
export default function CustomFilter(){
    return(
        <form action="" className="">                              
      <label> <img src={require('../../../images/filter.svg')} alt="filter-image"/> </label>  <SelectStyle id="filterdrop" name="Filterby">
       <option value="">Filters</option>
          <option value="supporters">Supporters</option>
          <option value="community">Community</option>
        </SelectStyle>
    </form>
    )
}