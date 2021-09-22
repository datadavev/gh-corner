import { html } from 'lit';
import '../gh-corner.js';

export default {
  title: 'GhCorner',
  component: 'gh-corner',
  argTypes: {
    title: { control: 'text' },
    user: { control: 'text' },
    repo: { control: 'text' },
    position: {control: 'text' },
  },
};

function Template({ title = 'Hello world', user = 'tester', repo='repo', position='right', fillColor}) {
  return html`
    <gh-corner
      style="--gh-corner-fill: ${fillColor || 'black'}"
      .title=${title}
      .user=${user}
      .repo=${repo}
      .position=${position}
    >
    </gh-corner>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomUser = Template.bind({});
CustomUser.args = {
  user: 'tester',
  repo: 'repo',
};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
  position: 'right',
};

