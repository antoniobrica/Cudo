import React from 'react';
import './country.module.scss';
import { useCountrykQuery } from '../../services/useRequest';
import { GET_COUNTRY } from '../../graphql/graphql';
import { Button, Header, Modal, Tab, Table, Input, Form, Grid, Select, TextArea } from 'semantic-ui-react';

/* eslint-disable-next-line */
export interface CountryProps {}

export function Country(props: CountryProps) {
  const [items, setItems] = React.useState([])
  const [country, setCountry] = React.useState("")

  const { loading, error, data } = useCountrykQuery(GET_COUNTRY);
  React.useEffect(() => {
    if(data){
      console.log('data==>', data.Countries);
     setItems(data.Countries.map(({countryName }) => ({ key: countryName, value: countryName, text: countryName })));

    }
  }, [data]);
  const onCountry = (event, data) => {
    setCountry(data.value)
    console.log('country==>', country)
  }
  return (
    <Form.Field>
    <label>Country</label>
    <Select
      placeholder='Select' className="small" options={items}
      value={country}
      onChange={onCountry}
    />
  </Form.Field>
  );
}

export default Country;
