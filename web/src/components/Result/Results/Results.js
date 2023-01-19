import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Result/ResultsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_RESULT_MUTATION = gql`
  mutation DeleteResultMutation($id: Int!) {
    deleteResult(id: $id) {
      id
    }
  }
`

const ResultsList = ({ results }) => {
  const [deleteResult] = useMutation(DELETE_RESULT_MUTATION, {
    onCompleted: () => {
      toast.success('Result deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete result ' + id + '?')) {
      deleteResult({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Season</th>
            <th>Week number</th>
            <th>Game one</th>
            <th>Game two</th>
            <th>Game three</th>
            <th>Bye</th>
            <th>Deleted</th>
            <th>Created at</th>
            <th>Player id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{truncate(result.id)}</td>
              <td>{truncate(result.season)}</td>
              <td>{truncate(result.week_number)}</td>
              <td>{truncate(result.game_one)}</td>
              <td>{truncate(result.game_two)}</td>
              <td>{truncate(result.game_three)}</td>
              <td>{truncate(result.bye)}</td>
              <td>{truncate(result.deleted)}</td>
              <td>{timeTag(result.createdAt)}</td>
              <td>{truncate(result.playerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.result({ id: result.id })}
                    title={'Show result ' + result.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editResult({ id: result.id })}
                    title={'Edit result ' + result.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete result ' + result.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(result.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResultsList
