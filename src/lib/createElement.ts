export default function createElement(
  type: string,
  props: object,
  ...children: any
) {
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children)
  return el
}
