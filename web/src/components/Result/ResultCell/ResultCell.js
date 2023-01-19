import Result from 'src/components/Result/Result'

export const QUERY = gql`
  query FindResultById($id: Int!) {
    result: result(id: $id) {
      id
      season
      week_number
      game_one
      game_two
      game_three
      bye
      deleted
      createdAt
      playerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Result not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ result }) => {
  return <Result result={result} />
}
