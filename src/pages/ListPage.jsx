import { useQuery } from "@apollo/client/react"
import { useContext, useEffect, useState } from "react";
import Card, { Button, CardDetail, CardImage } from "../Element/Card";
import Navbar from "../Element/Navbar";
import { COUNTRIES } from "../lib/Country";
import { useNavigate } from "react-router-dom";
import { THEME, ThemeContext, useTheme } from "../lib/Theme";


export default function ListPage(){
    const [substring, setSubstring] = useState('')
    const [countryList, setCountry] = useState([])
    const {loading, error, data} = useQuery(COUNTRIES)

    const {curTheme, setCurTheme} =useTheme()
    const [favorites, setFavorites] = useState([])
    let tempFav = []
    useEffect(()=>{
        const favorites = localStorage.getItem('favorites')
        if(favorites){
            setFavorite(favorites)
            tempFav = favorites
        }
    },[])
    const setFavorite =  (code) =>{
        tempFav.push(code)
        setFavorites(tempFav)
        localStorage.setItem('favorites',JSON.stringify(favorites))
        const favoritesloc = localStorage.getItem('favorites')
        console.log(favoritesloc)
    }

    const navigate = useNavigate()
    // console.log(theme);
    if(!loading){
        return(
            <Navbar setSubstring={setSubstring}>
                <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,minmax(0,1fr))",
                    gap:"1rem",
                    width:"100%",
                    backgroundColor:curTheme.background,
                    color:curTheme.fontColor
                }}>
                    {data.countries.filter(dat => dat.name.toLowerCase().includes(substring.toLowerCase())).map((d)=>{
                        return(
                            <Card>
                                <CardDetail>
                                    <div onClick={()=>navigate(`/detail/${d.code}`)}>
                                        {d.name}
                                    </div>
                                </CardDetail>
                                <Button>
                                    <div onClick={()=>setFavorite(d.code)}>
                                    ❤
                                    </div>
                                </Button>
                            </Card>
                        )
                    }
                    )}
                </div>
            </Navbar>
        )
    }

}