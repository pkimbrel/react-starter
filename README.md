# React/Vite Starter

`npm init vite@latest react-starter`

Select:
* React
* Typescript

## Install Vite dependencies

```sh
cd react-starter
npm install
```

## Install Basic dependencies

```sh
npm install --save react-router-dom @azure/msal-browser @azure/msal-react

npm install --save-dev @types/node tailwindcss autoprefixer

npx tailwindcss init -p
```

# Update VITE to allow for relative paths

To handle realtive paths, you must update two places:

* vite.config.ts - influences the Vite Typescript compiler
* tsconfig.json - influences the VS Code Typescript compiler

## Update vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      app: resolve(__dirname, "/src/app"),
      components: resolve(__dirname, "src/components"),
      layout: resolve(__dirname, "src/layout"),
      pages: resolve(__dirname, "src/pages")
    }
  }
})
```

## Update tsconfig.json

```json
{
  "compilerOptions": {
      // ...
      // ...
      // ...
      
      "baseUrl": ".",
      "paths": {
         "app/*": ["./src/app/*"],
         "components/*": ["./src/components/*"],
         "layout/*": ["./src/layout/*"],
         "pages/*": ["./src/pages/*"]
      }
   }
}
```

## Update tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Remove the default application

Remove the following folders/files

* /Assets (folder)
* App.css
* App.tsx

## Replace index.css with Tailwind imports

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Replace main.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>Hello, world!</div>
  </React.StrictMode>
);
```

# Start the server

```bash
npm run dev

  VITE v4.5.0  ready in 156 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Add a couple of pages

`src/pages/Page1.tsx`

```tsx
const Page1 = () => {
  return (
    <div className="p-2">
      This is page 1.
    </div>
  );
};

export default Page1;
```

`src/pages/Page2.tsx`

```tsx
const Page2 = () => {
  return (
    <div className="p-2">
      This is page 2.
    </div>
  );
};

export default Page2;
```

## Upgrade `main.tsx` with a simple layout and router

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Page1 from "pages/Page1";
import Page2 from "pages/Page2";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="p-3">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate replace to="/page1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
```