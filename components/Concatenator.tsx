import { useState } from 'react'
import s from '../styles/Concatenator.module.scss'

export default function Concatenator() {
  const [leftText, setLeftText] = useState('')
  const [rightText, setRightText] = useState('')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  return (
    <>
      <div className={s['text-inputs']}>
        <label>
          <span>Текст слева</span>
          <input
            className="things-input-text"
            type="text"
            placeholder="data/new/"
            value={leftText}
            onChange={e => {
              setLeftText(e.target.value)
              setOutput(concatenate(e.target.value, input, rightText))
            }}
          />
        </label>
        <label>
          <span>Текст справа</span>
          <input
            className="things-input-text"
            type="text"
            placeholder=".jpg"
            value={rightText}
            onChange={e => {
              setRightText(e.target.value)
              setOutput(concatenate(leftText, input, e.target.value))
            }}
          />
        </label>
      </div>
      <label>
        <span>Исходный текст</span>
        <textarea
          cols={30}
          rows={10}
          placeholder="benzinovye-gazonokosilki"
          value={input}
          onChange={e => {
            setInput(e.target.value)
            setOutput(concatenate(leftText, e.target.value, rightText))
          }}
        />
      </label>
      <label>
        <span>Результат</span>
        <textarea
          cols={30}
          rows={10}
          placeholder="data/new/benzinovye-gazonokosilki.jpg"
          value={output}
          onChange={e => { setOutput(e.target.value) }}
        />
      </label>
    </>
  )
}

function concatenate(l: string, input: string, r: string): string {
  const textLines = input.split(/\r?\n+/)
  let result = ''
  for (var i = 0; i < textLines.length; i++) {
    if (textLines[i] == '') continue
    textLines[i] = l + textLines[i]
    textLines[i] = textLines[i] + r
    result += textLines[i] + '\n'
  }
  return result
}
