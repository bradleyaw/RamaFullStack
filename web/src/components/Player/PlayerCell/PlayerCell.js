import Player from 'src/components/Player/Player'

export const QUERY = gql`
  query FindPlayerById($id: Int!) {
    player: player(id: $id) {
      id
      first_name
      last_name
      deleted
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Player not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ player }) => {
  return <Player player={player} />
}
