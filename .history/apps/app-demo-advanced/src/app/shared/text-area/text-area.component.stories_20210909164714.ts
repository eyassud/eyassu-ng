import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';

export default {
  title: 'TextAreaComponent',
  component: TextAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TextAreaComponent>;

const Template: Story<TextAreaComponent> = (args: TextAreaComponent) => ({
  component: TextAreaComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  value: {
    configuration: {
      disabled: true,
      readOnly: false,
      required: true,
      visible: true
    },
    label: 'Tell me about your trip plans',
    selectedText: 'A previous value'
  }
}
