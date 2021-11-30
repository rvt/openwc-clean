import { html, TemplateResult } from 'lit';
import '../src/openwc-clean.js';

export default {
  title: 'OpenwcClean',
  component: 'openwc-clean',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <openwc-clean style="--openwc-clean-background-color: ${backgroundColor}" .title=${title}></openwc-clean>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
