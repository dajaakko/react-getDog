import {useState} from "react"

const url = "https://dog.ceo/api/breeds/image/random"

const getDog = () => {
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  const fetchDog = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        

        setMessage(json.message)
        setLoading(false)
      }
      
    } catch (error) {
        setError(error.message)
    }
  }
  return {message,loading,error, fetchDog}
}
export default getDog;
