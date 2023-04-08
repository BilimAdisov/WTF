import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import actions from "../store/slice/themeSlice"
import themeSlice from "../store/slice/themeSlice"


const rootActions:any = {
  ...themeSlice
}
export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}