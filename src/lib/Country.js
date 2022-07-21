import {gql} from "@apollo/client"

export const COUNTRIES = gql`
{
	countries(filter:{
  }){
    name
    code
    states{
      name
    }
  }
}`

export const COUNTRY = gql`
query COUNTRY($code:ID!){
	country (code:$code){
    name
    capital
    continent{
      name
    }
    currency
    languages{
      name
    }
    states{
      name
    }
  }
}`