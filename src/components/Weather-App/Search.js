import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "./api";
import styled from "styled-components";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  async function loadOptions(inputValue) {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=5000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();

      const options = result.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));

      return { options }; // Return an object with the options array
    } catch (error) {
      console.error(error);
      return { options: [] }; // Return an empty array if there's an error
    }
  }

  return (
    <StyledAsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

const StyledAsyncPaginate = styled(AsyncPaginate)`
  width: 30%;
  margin: 0 auto;
  padding-top: 30px;

  @media screen and (max-width: 590px) {
    width: 80%;
  }
`;
