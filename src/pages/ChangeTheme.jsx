import { useQuery } from "@apollo/client/react"
import { useContext, useEffect, useState } from "react";
import Card, { CardDetail, CardImage } from "../Element/Card";
import Content, { Label, Value } from "../Element/DetailPageElement";
import Navbar from "../Element/Navbar";
import {useParams} from "react-router-dom"
import { THEME, ThemeContext, useTheme } from "../lib/Theme";



export default function ChangeTheme(){
    const themeList = [{id:1, name:"Default Theme"}, {id:2, name:"Light Theme"}, {id:3, name:"Dark Theme"}]
    const {curTheme, setCurTheme} =useTheme()
    useEffect(()=>{
        const theme = JSON.parse(localStorage.getItem('theme'))
        console.log(theme);
        if(theme){
            setCurTheme(theme)
        }
    },[])
    const handleChange= (e)=>{
        if(e.target.value==1){
            console.log("light");
            setCurTheme(THEME.default)
            localStorage.setItem('theme', JSON.stringify(THEME.default))
        }
        else if(e.target.value==2){
            console.log("light");
            setCurTheme(THEME.light)
            localStorage.setItem('theme', JSON.stringify(THEME.light))
        }
        else if(e.target.value==3){
            console.log("dark");
            setCurTheme(THEME.dark)
            localStorage.setItem('theme', JSON.stringify(THEME.dark))
        }
        console.log(e.target.value);
        const theme = JSON.parse(localStorage.getItem('theme'))
        console.log(theme);
    }
    console.log(curTheme);
    return(
        <Navbar searchBar={false}>
            <div style={{
                display:"grid",
                gap:"1rem",
                width:"100%",
                minHeight:"100%",
                paddingLeft:"1.6rem",
                backgroundColor:curTheme.background,
            }}>
                <Content>
                    <Label>
                        <div style={{color:curTheme.fontColor}}>
                        Select Theme
                        </div>
                    </Label>
                    <Value>
                        <select id="theme" name="label" value={curTheme.id} onChange={(e)=>handleChange(e)}>
                            <option>select theme</option>
                            {themeList.map((theme) => (
                            <option key={theme.id} value={theme.id}>{theme.name}</option>
                            ))}
                        </select>
                    </Value>
                </Content>
            </div>
        </Navbar>
    )

}