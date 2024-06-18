import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"


// help us shape our data in the form of our interfaces (type)
export interface Game {
    id: number
    name: string
    background_image: string
}

export interface FetchGameResponse {
    count: number
    results: Game []
}


const useGames = () => {

    // useStates to help us update our UI with our games or data
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
 
 
    // Create a helper function to getch our data
    //  const fetchGames = () => {
    // }
    
    /// useeffect to fetch our data
    
    useEffect(() => {
        
        // we need an instance of AbortController() to help us unsubscribe to the api, we will save it to a variable   essentially this will help us unplug from our api
        const controller = new AbortController();


        apiClient
        .get<FetchGameResponse>('/games', {signal: controller.signal})  // the signal ... sends in parameter to the endpoint that we want to cancel subscription 
        .then(response => setGames(response.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return
            setError(error.message)
        });

        // notice this return is the cleanup function where we unplug from the api
        return () => controller.abort(); // this will cancel the subscription (or stop using the api or unplug from the api after we're done)
        // fetchGames();
       
     }, [])

     return {games, error}
}

export default useGames