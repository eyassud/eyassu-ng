import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChoiceComponent } from './choice.component';

export default {
  title: 'ChoiceComponent',
  component: ChoiceComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChoiceComponent>;

const Template: Story<ChoiceComponent> = (args: ChoiceComponent) => ({
  component: ChoiceComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}