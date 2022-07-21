import { useContext } from "react"
import { ThemeContext } from "../lib/Theme"

export default function Content({children,...attr}) {
    return (
        
        <div className="sm:grid sm:items-start sm:border-t sm:border-gray-200 flex "
        style={{
            paddingTop:"1.2rem"
        }}>
            {children}
        </div>

    )
  }

    export function Label({children}){
        const theme = useContext(ThemeContext)
        return(
        <label className="block font-medium sm:mt-px sm:pt-2 min-w-[35%]">
            {children}
        </label>
        )
    }

    export function Value({children}){
        return(
        <div className="block sm:mt-px sm:pt-2">
            {children}
        </div>
        )
    }
