import React, {
  createContext as CreateContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext
} from 'react'

interface AppContext {
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
  mobile: boolean
}
export const Context = CreateContext<AppContext>({
  expanded: true,
  setExpanded: () => '',
  mobile: true
})

export const AppProvider = ({
  expanded,
  setExpanded,
  mobile,
  children
}: PropsWithChildren<AppContext>) => {
  const contextProps: AppContext = {
    expanded,
    setExpanded,
    mobile
  }
  return <Context.Provider value={contextProps}>{children}</Context.Provider>
}

export const useAppContext = () => useContext<AppContext>(Context)
