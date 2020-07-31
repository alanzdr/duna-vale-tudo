import React, {
  createContext,
  useState,
  useEffect
} from 'react'

import api from '../services/api'

const INITIAL_STATE = {
  data: []
}

export const DataContext = createContext(INITIAL_STATE)

const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    api
      .get('/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  return (
    <DataContext.Provider value={{
      data
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;