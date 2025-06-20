import MyButton from '../components/MyButton.vue';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    alertMessage: { control: 'text' },
    click: { action: 'clicked' },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" @click="args.click" />',
});

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  label: 'Click Me',
  primary: false,
  alertMessage: 'Привет! Это alert из пропса 😊',
};
