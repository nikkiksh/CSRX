import React from 'react';
import { SelectStyle } from '../CustomFilter/style';
 
export default function SortBy(){
    return(
        <form action="" className="">
        <label>Sort By: </label>
        <SelectStyle id="sortbydrop" name="Sortby">
        <option value="">Select</option>
          <option value="supporters">Supporters</option>
          <option value="supporters">Supporters</option>
          <option value="community">Community</option>
          <option value="supporters">Supporters</option>
        </SelectStyle>
    </form>
    )
}