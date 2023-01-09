import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResultForm from 'src/components/Result/ResultForm'

const CREATE_RESULT_MUTATION = gql`
  mutation CreateResultMutation($input: CreateResultInput!) {
    createResult(input: $input) {
      id
    }
  }
`

const NewResult = () => {
  const [createResult, { loading, error }] = useMutation(
    CREATE_RESULT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Result created')
        navigate(routes.results())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createResult({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Result</h2>
      </header>
      <div className="rw-segment-main">
        <ResultForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewResult
