import React, {
  createContext,
  useState,
  useCallback
} from 'react'

const INITIAL_STATE = {
  city: []
}

export const LocalizationContext = createContext(INITIAL_STATE)

// Criciúma = 0
// Tubarão = 1
// Imbituba = 2
// Araranguá = 3

const LocalizationProvider = ({ children }) => {
  const [city, setCity] = useState(() => {
    const initValue = localStorage.getItem('duna-city');
    if (initValue) {
      return initValue;
    }
    return -1;
  });

  const onSelectCity = useCallback(
    (selected) => {
      setCity(selected)
      localStorage.setItem('duna-city', selected);
    },
    [setCity],
  )

  return (
    <LocalizationContext.Provider value={{
      city,
      select: onSelectCity
    }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LocalizationProvider;