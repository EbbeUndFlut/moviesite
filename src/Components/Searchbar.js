import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MovieApi from "../api/MovieApi.js"

const Searchbar = () => {
    let navigate = useNavigate()
    useEffect(() => {
        document.querySelector('input[type="text"]').addEventListener("keyup", (e) => {
            if (e.keyCode === 13 && e.target.value.length > 0) {
                let query = e.target.value
                let result = async () => {
                    navigate("/", { state: { results: await MovieApi.baseSearch(e.target.value), query: query } })
                }
                result()
                e.target.value = ""
            }
        })
    }, [navigate])
    return <input type="text" name="search" id="search" placeholder="Search something here" className="borderJoy" />
}

export default Searchbar
