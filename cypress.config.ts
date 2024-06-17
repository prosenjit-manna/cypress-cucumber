import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { updateGoogleSheetCell } from "./cypress/plugins/google-service";

export default defineConfig({
  experimentalStudio: true,

  e2e: {
    baseUrl: 'http://localhost:3030',
    experimentalStudio: true,
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );


      on('task', {
        readFileMaybe(options) {
          updateGoogleSheetCell(options);

          return null
        },
      })

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});