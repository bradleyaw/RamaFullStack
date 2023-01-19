import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_RESULT_MUTATION = gql`
  mutation DeleteResultMutation($id: Int!) {
    deleteResult(id: $id) {
      id
    }
  }
`

const Result = ({ result }) => {
  const [deleteResult] = useMutation(DELETE_RESULT_MUTATION, {
    onCompleted: () => {
      toast.success('Result deleted')
      navigate(routes.results())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete result ' + id + '?')) {
      deleteResult({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Result {result.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{result.id}</td>
            </tr>
            <tr>
              <th>Season</th>
              <td>{result.season}</td>
            </tr>
            <tr>
              <th>Week number</th>
              <td>{result.week_number}</td>
            </tr>
            <tr>
              <th>Game one</th>
              <td>{result.game_one}</td>
            </tr>
            <tr>
              <th>Game two</th>
              <td>{result.game_two}</td>
            </tr>
            <tr>
              <th>Game three</th>
              <td>{result.game_three}</td>
            </tr>
            <tr>
              <th>Bye</th>
              <td>{result.bye}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{result.deleted}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(result.createdAt)}</td>
            </tr>
            <tr>
              <th>Player id</th>
              <td>{result.playerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editResult({ id: result.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(result.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Result
