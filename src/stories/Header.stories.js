import React from "react";

import { Header } from "../components/Header/lib/Header";

export default {
  title: "Ocular/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
