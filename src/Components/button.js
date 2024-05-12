import React from 'react'
import { Button } from 'react-bootstrap'
export default function authButton({title, handleAction}) {
  return (
    <Button variant="primary" onClick={handleAction}>{title}</Button>
  )
}
