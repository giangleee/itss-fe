import { useEffect, useRef } from "react"

const useScriptRef = () => {
    const scripted = useRef<HTMLDivElement | boolean>(true)

    useEffect(
        () => () => {
            scripted.current = false
        },
        []
    )

}

export default useScriptRef
