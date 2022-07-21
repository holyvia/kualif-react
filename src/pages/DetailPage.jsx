import { useQuery } from "@apollo/client/react"
import { useContext, useEffect, useState } from "react";
import Card, { CardDetail, CardImage } from "../Element/Card";
import Content, { Label, Value } from "../Element/DetailPageElement";
import Navbar from "../Element/Navbar";
import { COUNTRIES, COUNTRY } from "../lib/Country";
import {useParams} from "react-router-dom"
import { THEME, ThemeContext, useTheme } from "../lib/Theme";


export default function DetailPage(){
    const [countryList, setCountry] = useState([])
    const {code} = useParams()
    const {loading, error, data} = useQuery(COUNTRY,{
        variables:{
            code:code
        }
    })
    const {curTheme, setCurTheme} =useTheme()
    useEffect(()=>{
        const theme =JSON.parse(localStorage.getItem('theme'))
        if(theme){
            setCurTheme(theme)
        }
    },[])
    if(!loading){
        console.log(data);
        return(
            <Navbar>
                <div style={{
                    // display:"grid",
                    margin:0,
                    gap:"1rem",
                    width:"100%",
                    height:"100%",
                    paddingLeft:"1.6rem",
                    backgroundColor:curTheme.secColor,
                    color:curTheme.fontColor
                }}>
                    <Content>
                        <Label>
                            Country Name
                        </Label>
                        <Value>
                            {data.country.name}
                        </Value>
                    </Content>
                    <Content>
                        <Label>
                            Capital
                        </Label>
                        <Value>
                            {data.country.capital}
                        </Value>
                    </Content>
                    <Content>
                        <Label>
                            Continent
                        </Label>
                        <Value>
                            {data.country.continent.name}
                        </Value>
                    </Content>
                    <Content>
                        <Label>
                            Curency
                        </Label>
                        <Value>
                            {data.country.currency}
                        </Value>
                    </Content>
                    <Content>
                        <Label>
                            Language(s)
                        </Label>
                        <Value>
                            {data.country.languages.map((lg)=>(
                                <p>{lg.name}</p>
                            )
                            )}
                        </Value>
                    </Content>
                    <Content>
                        <Label>
                            State(s)
                        </Label>
                        <Value>
                            {data.country.states.length == 0 ? <p>none</p>:
                            data.country.states.map((st)=>(
                                <p>{st.name}</p>
                            ))}
                            
                        </Value>
                    </Content>
                </div>
            </Navbar>
        )
    }

}