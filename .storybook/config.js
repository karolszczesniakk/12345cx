import React from "react";
import { loadStories } from "./load-stories";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { Default as Theme } from "../src/themes";

// Styled Components theme provider wraps app
addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
