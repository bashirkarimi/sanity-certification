import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'

function subtractMinutesFromDate(date: string, minutes: number) {
  return new Date(new Date(date).getTime() - minutes * 60000)
}

const DoorsOpenInput = (props: NumberInputProps) => {
  const date = useFormValue(['date']) as string

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>
        Doors Open {subtractMinutesFromDate(date, props.value || 0).toLocaleString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Text>
    </Stack>
  )
}

export {DoorsOpenInput}
