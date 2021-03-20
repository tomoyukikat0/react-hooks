import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({ dispatch, event }) => {
  const handleClickeDeleteButton = () => {
      const id = event.id
      const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか`)
      if (result) dispatch({ type: DELETE_EVENT, id })
    }

    return (
      <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickeDeleteButton}>削除</button></td>
    </tr>
    )
}

export default Event
