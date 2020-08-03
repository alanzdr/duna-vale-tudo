import { useContext } from 'react'

import { LocalizationContext } from '../contexts/localization'

const useLocalization = () => {
  const { city, select } = useContext(LocalizationContext)
  return {
    city,
    select
  };
}

export default useLocalization;