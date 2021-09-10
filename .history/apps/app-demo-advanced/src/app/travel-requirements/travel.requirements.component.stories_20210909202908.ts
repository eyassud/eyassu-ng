import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TravelRequirementsComponent } from './travel-requirements.component';

export default {
  title: 'TextAreaComponent',
  component: TravelRequirementsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TravelRequirementsComponent>;

const Template: Story<TravelRequirementsComponent> = (args: TravelRequirementsComponent) => ({
  component: TravelRequirementsComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  value: {
    configuration: {
      disabled: false,
      readOnly: false,
      required: true,
      visible: true
    },
    requirement: undefined
  }
}
