# React + TypeScript + Vite

Merhaba Eteration IT ekibi 👋 😎

Bu Readme file'ı sizin için yazıyorum.

Kullandığım teknolojiler:

1. Vite ile oluşturdum bu React projesini.
2. Tailwind ,SCSS (evet ikisinide aynı anda kullandım 😎)
3. Redux - Redux Toolkit
4. Vitest (Test yazmak için kullandım)
   ![Alt text](image.png)

Comman Lines:
npm i // paketleri yüklemek için
npm run dev // Ayağa kaldırmak için projeyi
npm run test // Test case'leri check etmek için

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
