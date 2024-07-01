import Icons from './Icons'

import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
  title: 'ALOT/Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>

const Template: ComponentStory<typeof Icons> = () => {
  return <Icons />
}

export const Primary = Template.bind({})
Template.args = {}
