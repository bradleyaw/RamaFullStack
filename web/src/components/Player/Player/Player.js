import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PLAYER_MUTATION = gql`
  mutation DeletePlayerMutation($id: Int!) {
    deletePlayer(id: $id) {
      id
    }
  }
`

const Player = ({ player }) => {
  const [deletePlayer] = useMutation(DELETE_PLAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Player deleted')
      navigate(routes.players())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete player ' + id + '?')) {
      deletePlayer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Player {player.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{player.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{player.first_name}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{player.last_name}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{player.deleted}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(player.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlayer({ id: player.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(player.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Player
