import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DropDownComponent } from './drop-down.component';

export default {
  title: 'DropDownComponent',
  component: DropDownComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DropDownComponent>;

const Template: Story<DropDownComponent> = (args: DropDownComponent) => ({
  component: DropDownComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}