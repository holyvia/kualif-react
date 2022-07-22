import { Children, useContext } from "react";
import { ThemeContext, useTheme } from "../lib/Theme";

export default function Card({children,...attr}) {
  
  const{curTheme, setCurTheme} = useTheme()
  
  return (
      <div className="overflow-hidden shadow rounded-lg"
      style={{
        backgroundColor:curTheme.secColor,
        display:"flex"
      }}>
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    )
  }


  export function CardDetail({children}){
    return<div style={{padding:"1.2 rem"}}>{children}</div>
}

export function Button({children}){
  const{curTheme, setCurTheme} = useTheme()
  
  return <div
  style={{
    marginLeft:"5.2rem",
    width:"auto",
    paddingLeft:"0.4rem",
    paddingRight:"0.4rem",
    borderRadius:"5px",
    backgroundColor:curTheme.background
  }}>
    {children}
  </div>
}