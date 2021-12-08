import { useState } from 'react'
import YouTube from './YouTube'
import s from '../styles/RiceCalculator.module.scss'

export default function RiceCalculator() {
  const [rice, setRice] = useState(500)
  const [other, setOther] = useState({
    water: 550,
    vinegar: 55,
    sugar: 45,
    salt: 5
  })

  return (
    <div>
      <label>
        <span>Рис, г</span>
        <input
          className={s.input}
          type="number"
          min="1" max="999999"
          pattern="[0-9]*"
          inputMode="numeric"
          value={rice}
          onChange={e => {
            const rice = Number.parseInt(e.target.value)
            e.target.value = rice.toString()
            if (Number.isNaN(rice)) {
              setRice(0);
              setOther(calculateProportions(0));
            } else if (rice > 999999) {
              setRice(999999);
              setOther(calculateProportions(999999));
            } else {
              setRice(Math.abs(rice));
              setOther(calculateProportions(rice));
            }
          }}
          onBlur={e => {
            const rice = Number.parseInt(e.target.value) < 1 ? 500 : Number.parseInt(e.target.value);
            setRice(rice);
            setOther(calculateProportions(rice));
          }}
        />
      </label>
      <ul className={s.other}>
        <li className={s.other__item}>
          <span className={s.other__label}>Вода</span>
          <span className={s.other__value}>{other.water}<span className={s.other__unit}>мл</span></span>
        </li>
        <li className={s.other__item}>
          <span className={s.other__label}>Уксус 3%</span>
          <span className={s.other__value}>{other.vinegar}<span className={s.other__unit}>мл</span></span>
        </li>
        <li className={s.other__item}>
          <span className={s.other__label}>Соль</span>
          <span className={s.other__value}>{other.salt}<span className={s.other__unit}>г</span></span>
        </li>
        <li className={s.other__item}>
          <span className={s.other__label}>Сахар</span>
          <span className={s.other__value}>{other.sugar}<span className={s.other__unit}>г</span></span>
        </li>
      </ul>
      <YouTube youtubeId="Cht4NvRUz-s" />
    </div>
  )
}

function calculateProportions(rice: number) {
  const proportion = Math.abs(rice / 500)
  return {
    water: Math.round(550 * proportion),
    vinegar: Math.round(55 * proportion),
    sugar: Math.round(45 * proportion),
    salt: Math.round(5 * proportion)
  }
}
