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
  return <div className="bg-slate-200"
  style={{
    marginLeft:"8rem",
    width:"1.6rem",
    borderRadius:"5px"
  }}>
    {children}
  </div>
}