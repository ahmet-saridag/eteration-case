import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-ignore
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    // hey! 👋 over here
    globals: true,
    setupFiles: "./src/tests/setup.ts", // assuming the test folder is in the root of our project
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `
        // Small tablets and large smartphones (landscape view)
        $screen-sm-min: 576px;
        
        // Small tablets (portrait view)
        $screen-md-min: 768px;
        
        // Tablets and small desktops
        $screen-lg-min: 992px;
        
        // Large tablets and desktops
        $screen-xl-min: 1200px;
        
        // Small devices
        @mixin sm {
          @media (min-width: #{$screen-sm-min}) {
            @content;
          }
        }
        
        // Medium devices
        @mixin md {
          @media (min-width: #{$screen-md-min}) {
            @content;
          }
        }
        
        // Large devices
        @mixin lg {
          @media (min-width: #{$screen-lg-min}) {
            @content;
          }
        }
        
        // Extra large devices
        @mixin xl {
          @media (min-width: #{$screen-xl-min}) {
            @content;
          }
        }
        
        .container {
          max-width: 1280px;
        
          &--sm {
            max-width: 640px;
          }
        
          &--md {
            max-width: 768px;
          }
          &--lg {
            max-width: 1024px;
          }
          &--xl {
            max-width: 1280px;
          }
        
          &--2xl {
            max-width: 1536px;
          }
        }        
        $blue: #2a59fe;
        $white: #ffffff;
        $grey: rgba(255, 255, 255, 0.95);
        $grey-dark: rgba(196, 196, 196, 1);
        $text-grey: rgba(51, 51, 51, 0.7);
        *,:before,:after{box-sizing:border-box;}html,body,div,span,object,iframe,figure,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,code,em,img,small,strike,strong,sub,sup,tt,b,u,i,ol,ul,li,fieldset,form,label,table,caption,tbody,tfoot,thead,tr,th,td,main,canvas,embed,footer,header,nav,section,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}footer,header,nav,section,main{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}
        `,
      },
    },
  },
});
