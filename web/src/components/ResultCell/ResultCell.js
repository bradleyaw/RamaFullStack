export const QUERY = gql`
  query resultsQuery {
    results {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ results }) => {
  console.log(results)
  return (
    <ul>
      {results.map(({ id }) => {
        return <li key={id}>{id}</li>
      })}
    </ul>
  )
}
