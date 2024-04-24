import { Fragment } from 'react'

function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </Fragment>
    )
  })
  return <div>{message}</div>
}

export default Text
