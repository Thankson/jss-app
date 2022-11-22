import 'styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Mock data
import { setupWorker , rest } from "msw";
if (typeof global.process === "undefined") { // make sure that is not a node process, it is a browser that's the only place that we want this to work
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req,res,ctx) => {
      return res(ctx.json({name: "Steven Zeng"}));
    })
  );
  worker.start();
}
