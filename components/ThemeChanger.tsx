import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import s from '../styles/ThemeChanger.module.scss'

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const [image, setImage] = useState('')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <button
        className={s.button}
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark')
          } else {
            setTheme('light')
          }
        }}>
          {
            theme === 'light' ?
              <Image src="/icon/bulb_off.svg" width={32} height={32} alt="" /> :
              <Image src="/icon/bulb_on.svg" width={32} height={32} alt="" />
          }
      </button>
    </div>
  )
}
