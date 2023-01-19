import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResultForm from 'src/components/Result/ResultForm'

export const QUERY = gql`
  query EditResultById($id: Int!) {
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
const UPDATE_RESULT_MUTATION = gql`
  mutation UpdateResultMutation($id: Int!, $input: UpdateResultInput!) {
    updateResult(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ result }) => {
  const [updateResult, { loading, error }] = useMutation(
    UPDATE_RESULT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Result updated')
        navigate(routes.results())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateResult({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Result {result?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ResultForm
          result={result}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
