import { useContext } from 'react'

import { DataContext } from '../contexts/data'

const useData = () => {
  const { data } = useContext(DataContext)
  return data;
}

export default useData;