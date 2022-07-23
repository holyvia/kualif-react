import { useQuery } from "@apollo/client/react"
import { useContext, useEffect, useState } from "react";
import Card, { Button, CardDetail, CardImage } from "../Element/Card";
import Navbar from "../Element/Navbar";
import { COUNTRIES } from "../lib/Country";
import { useNavigate } from "react-router-dom";
import { THEME, ThemeContext, useTheme } from "../lib/Theme";

export default function FavoritePage(){
    const [substring, setSubstring] = useState('')
    const [countryList, setCountryList] = useState([])
    const {loading, error, data} = useQuery(COUNTRIES)
    const [favorites, setFavorites]=useState([])
    const {curTheme, setCurTheme} =useTheme()
    const getArray=JSON.parse(localStorage.getItem('favorites'))
    useEffect(()=>{
        if(getArray!==null){
            setFavorites([])
            setFavorites(getArray)
        }
        else{
            console.log("kosong")
        }
    },[])
    useEffect(()=>{
        if(!loading){
            setCountryList(data.countries)
            console.log(countryList);
        }
    },[loading])
    useEffect(()=>{
        if(!loading){
            setCountryList(data.countries)
            console.log(countryList);
        }
    },[favorites])
    const setFavorite =  (code, item) =>{
        let array = favorites
        let addArray = true
        array.map((item, key) => {
            if (item === code) {
                array.splice(key, 1)
                addArray = false
            }
        })
        if (addArray) {
            array.push(code)
        }
        setFavorites([...array])

        localStorage.setItem("favorites", JSON.stringify(favorites))

        var storage = localStorage.getItem("favItem" + (item) || '0')
        if (storage == null) {
            localStorage.setItem(("favItem" + (code)), JSON.stringify(item))
        }
        else {
            localStorage.removeItem("favItem" + (code))
        }
    }

    console.log(favorites);
    const navigate = useNavigate()
    // console.log(theme);
    if(!loading){
        return(
            <Navbar setSubstring={setSubstring} searchBar={true}>
                <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,minmax(0,1fr))",
                    gap:"1rem",
                    width:"100%",
                    backgroundColor:curTheme.background,
                    color:curTheme.fontColor,
                }}>
                    {data.countries.filter(dat => dat.name.toLowerCase().includes(substring.toLowerCase())).filter(da=>favorites.includes(da.code)).map((d)=>{
                        return(
                            <Card>
                                <CardDetail>
                                    <div onClick={()=>navigate(`/detail/${d.code}`)}>
                                        {d.name}
                                    </div>
                                </CardDetail>
                                <Button>
                                    <div onClick={()=>setFavorite(d.code,d)}>
                                        {!favorites.includes(d.code)?
                                        (<div>unvisited</div>):
                                        (<div>visited</div>)}
                                    
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