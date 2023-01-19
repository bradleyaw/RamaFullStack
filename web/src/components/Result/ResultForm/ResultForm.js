import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ResultForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.result?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="season"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Season
        </Label>

        <TextField
          name="season"
          defaultValue={props.result?.season}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="season" className="rw-field-error" />

        <Label
          name="week_number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Week number
        </Label>

        <NumberField
          name="week_number"
          defaultValue={props.result?.week_number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="week_number" className="rw-field-error" />

        <Label
          name="game_one"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game one
        </Label>

        <NumberField
          name="game_one"
          defaultValue={props.result?.game_one}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="game_one" className="rw-field-error" />

        <Label
          name="game_two"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game two
        </Label>

        <NumberField
          name="game_two"
          defaultValue={props.result?.game_two}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="game_two" className="rw-field-error" />

        <Label
          name="game_three"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Game three
        </Label>

        <NumberField
          name="game_three"
          defaultValue={props.result?.game_three}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="game_three" className="rw-field-error" />

        <Label
          name="bye"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bye
        </Label>

        <NumberField
          name="bye"
          defaultValue={props.result?.bye}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="bye" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <NumberField
          name="deleted"
          defaultValue={props.result?.deleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="deleted" className="rw-field-error" />

        <Label
          name="playerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Player id
        </Label>

        <NumberField
          name="playerId"
          defaultValue={props.result?.playerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="playerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ResultForm
