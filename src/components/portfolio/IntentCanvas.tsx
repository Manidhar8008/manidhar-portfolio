import { useEffect } from 'react'
import { IntentEngine } from '../../engine/engine'

export default function IntentCanvas() {
  useEffect(() => {
    const engine = new IntentEngine()
    return () => engine.destroy()
  }, [])

  return null
}
