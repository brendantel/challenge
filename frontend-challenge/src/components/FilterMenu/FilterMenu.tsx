import React from 'react';

import { Container, MenuContainer, MenuItem } from './FilterMenu.styles';
import { filterType } from '../../redux/types';


/*
  update the filter state to the appropriate type when the MenuItem is clicked
*/




const FilterMenu = ({ filter, filterSelected }) => {
  return (
    <Container>
      <MenuContainer>
        Filter by: <MenuItem onClick={filterSelected(filterType.certificate)}>Certificate</MenuItem> |
      <MenuItem onClick={filterSelected(filterType.bachelors)}>Bachelors</MenuItem> |
      <MenuItem onClick={filterSelected(filterType.masters)}>Masters</MenuItem> |
      <MenuItem onClick={filterSelected(filterType.phd)}>Ph.D.</MenuItem> |
      <MenuItem onClick={filterSelected(filterType.all)}>All</MenuItem>
      </MenuContainer>
    </Container>
  )

}


export default FilterMenu;
