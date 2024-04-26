import { useEffect, useState } from 'react'

import { Wedding } from '@/models/wedding'
import { getWedding } from '@/api/wedding'

function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    getWedding()
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 가져오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('error 발생')
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { wedding, loading, error }
}

export default useWedding
