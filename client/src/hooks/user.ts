import { useEffect, useState } from "react"
import { IUser } from "../models"
import axios from "axios"

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  async function getUsers() {
      setLoading(true)
      const response = await axios.get<IUser[]>('http://localhost:8000/user/get-all')
      setUsers(response.data)
      setLoading(false)
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  return { users, loading }
}

