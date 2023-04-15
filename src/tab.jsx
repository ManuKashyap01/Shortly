import { useState, useEffect, useCallback } from 'react'

function useIsTabVisible(setiscopy) {

    const handleVisibility = useCallback(() => {
        setiscopy(!document.hidden?'Copy':'Copied')
    }, [])

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [handleVisibility])

}

export default useIsTabVisible