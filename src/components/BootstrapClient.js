"use client"

import { useEffect } from "react"

function BootstrpClient(){
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    },[]);
    return null
}

export default BootstrpClient