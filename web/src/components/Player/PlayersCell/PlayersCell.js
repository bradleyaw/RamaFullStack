import { Link, routes } from '@redwoodjs/router'

import Players from 'src/components/Player/Players'

export const QUERY = gql`
  query FindPlayers {
    players {
      id
      first_name
      last_name
      deleted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No players yet. '}
      <Link to={routes.newPlayer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ players }) => {
  return <Players players={players} />
}
