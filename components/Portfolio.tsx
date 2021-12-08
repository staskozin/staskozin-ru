import s from '../styles/Portfolio.module.scss'

export default function Portfolio() {
  return (
    <div className={s.portfolio}>
      <div className={s.category}>
        <h2 className={s.heading}>Сделал</h2>
        <nav>
          <ul className={s['links']}>
            <li className={s['links__item']}>
              <a href="https://xn--b1aqmk3d.xn--p1ai">
                Сайт компании «Вэско-электро»
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="https://salon-kartin.ru">
                Сайт салона картин
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="https://stolpodnos.ru/constructor">
                Конструктор столиков для&nbsp;завтрака в&nbsp;постель
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="https://profkoptilnya.ru/constructor">
                Конструктор коптилен
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="https://cinema.staskozin.ru">
                Сайт кинотеатра для&nbsp;курсовой работы
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.category}>
        <h2 className={s.heading}>Инструменты</h2>
        <nav>
          <ul className={s['links']}>
            <li className={s['links__item']}>
              <a href="">
                Рисовый калькулятор
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="">
                Транслитератор
              </a>
            </li>
            <li className={s['links__item']}>
              <a href="">
                Конкатенатор
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
