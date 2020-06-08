import "./index.js";
import { html } from "lit-html";
import { centered } from "@webcomponents-dev/decorators-lit";

export default {
  decorators: [centered]
};

export const story = () => html`
  <my-counter></my-counter>
`;
