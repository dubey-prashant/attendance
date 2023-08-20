import { UserContextProvider } from "./contexts/user";

 
export default function Providers({children}) {
  return ( 
    <UserContextProvider>
      {children}
    </UserContextProvider>    
  )
}
