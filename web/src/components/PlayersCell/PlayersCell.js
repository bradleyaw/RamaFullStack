export const QUERY = gql`
  query PlayersQuery {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ players }) => {
  console.log(players)
  return (
    <ul>
      {players.map(({ id, first_name, last_name, deleted }) => {
        if (!deleted) return <li key={id}>{`${first_name} ${last_name}`}</li>
      })}
    </ul>
  )
}
