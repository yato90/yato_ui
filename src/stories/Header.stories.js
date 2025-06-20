import Header from '../components/Header.vue';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    color: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Добро пожаловать!',
  subtitle: 'Это подзаголовок',
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Заголовок без подзаголовка',
  subtitle: '',
};
