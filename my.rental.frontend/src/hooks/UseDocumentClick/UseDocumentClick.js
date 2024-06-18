import {useEffect, useRef} from "react";

export const useDocumentClick = (callback, deps) => {
    const ref = useRef();
    useEffect(() => {
        if(deps.every(element => element) && ref.current){
            const handleClickOutsideNavigator = (e) => !ref.current.contains(e.target) && callback();
            document.addEventListener('mousedown', handleClickOutsideNavigator);
            return () => document.removeEventListener('mousedown', handleClickOutsideNavigator);
        }
    }, [callback, deps]);
    return ref;
}