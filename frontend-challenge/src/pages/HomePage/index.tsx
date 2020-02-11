import React, { useState, useCallback } from 'react';

import BottomBar from '../../components/BottomBar/BottomBar';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Layout from '../../components/Layout/Layout';
import ProgramRow from '../../components/ProgramRow/ProgramRow';
import { Spinner } from '../../components/Spinner/Spinner';
import { PROGRAM_SEARCH } from '../../graphQL/queries';
import { ProgramContainer, ResultsHeader } from './HomePage.styles';
import { useQuery } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { updateFilter } from '../../redux/Filter/filter.actions';

//Build the home page
/*
  add appropriate types

  renderProgramContainer:  
    *   Finish the function renderHeader.  If a search term is present, it should return
        "129 Items For Engineering!" where 129 is the number of items and engineering is the search term.
        If the term is not present, it should return "129 Items Found!" where 129 is the total number of items.

    *   Render the list of programs under the ResultsHeader

  HomePage:
    *  Use hooks when possible.

    *  When the home page compoent renders it should trigger the PROGRAM_SEARCH query.
       The graphQL query PROGRAM_SEARCH accepts the following variables:
       offset, limit, term, and filter.  It returns two items, count & programs.
       run the query and render out the HomePage.

    *  Inside of the layout component render the FilterMenu, ProgramContainer, and BottomBar

    *  If the query is loading, render the spinner.  Once is it done call the renderProgramContainer function.

*/

const renderProgramContainer = (programs, count, term = null) => {
  const renderPrograms = programs =>
    programs.map((program, i) => (
      <ProgramRow key={program.id + program.name} program={program} />
    ));

  // write the renderHeader function
  const renderHeader = (count, term) => (
    <ResultsHeader>{count} {term ? `Items For ${term}` : 'Items Found'}!</ResultsHeader>
  )

  return (
    <ProgramContainer>
      {renderHeader(count, term)}
      {renderPrograms(programs)}
    </ProgramContainer>
  );
};

const HomePage = () => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1)
  const offset = (page - 1) * itemsPerPage
  const dispatch = useDispatch()
  const filterSelected = useCallback((filter) => event => dispatch(updateFilter(filter)), [dispatch])

  // Pull the term and filter from the redux store
  const { term, filter } = useSelector((state: RootState) => state)

  // Use the PROGRAM_SEARCH QUERY to get the count and programs list
  // supply that query with the offest, limit, term, and filter options
  const { loading, data } = useQuery(PROGRAM_SEARCH, { variables: { data: { term, offset, limit: itemsPerPage, filter } } })
  let programs

  if (loading) {
    programs = <Spinner />
  } else {
    programs = renderProgramContainer(data.programSearch.programs, data.programSearch.count, term)
  }

  return (
    <Layout>
      <FilterMenu filter={filter} filterSelected={filterSelected} />
      {programs}
      <BottomBar
        count={data ? data.programSearch.count : 0}    //put the count data here
        page={page}     //put the current page here
        setPage={setPage}  //put a function to set the page here
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  );
};

export default HomePage;
