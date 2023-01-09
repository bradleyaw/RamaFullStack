import { Link, routes } from '@redwoodjs/router'

import Results from 'src/components/Result/Results'

export const QUERY = gql`
  query FindResults {
    results {
      id
      season
      week_number
      playerid
      game_one
      game_two
      game_three
      bye
      deleted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No results yet. '}
      <Link to={routes.newResult()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ results }) => {
  return <Results results={results} />
}
