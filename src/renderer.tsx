import Nano, { Component, Helmet } from 'nano-jsx'

export function render(component: Component) {
  const app = Nano.renderSSR(component)
  const { body, head, footer, attributes } = Helmet.SSR(app)
  const html = `
    <!DOCTYPE html>
    <html ${attributes.html.toString()}>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/water.css@2/out/water.min.css' />
        ${head.join('\n')}
      </head>
      <body ${attributes.body.toString()}>
        ${body}
        ${footer.join('\n')}
      </body>
    </html>
  `
  return html
}
