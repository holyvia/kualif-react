import { createContext, useState } from "react"

export const [substring, setSubstring] = useState('')

export const substringContext = createContext(substring, setSubstring)