// import { createApp } from "./http/app.js";
// import {createApp} from './http/app.js';
import app from './http/app';

const port = Number(process.env.PORT ?? 3000);
createApp().listen(port, () => {
  console.log(`Event Photo API listening on http://localhost:${port}`);
});
