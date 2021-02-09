import createElement from '../lib/createElement'
import './Button.css'

export default function Button(text: string) {
  return createElement('button', { className: 'Button', textContent: text })
}
