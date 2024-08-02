import Button from './index';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = {
  args: {
    title: 'Load more'
  },
};

export const CallToAction = {
  args: {
    title: 'Pinned Task',
    isCta: true,
  },
};