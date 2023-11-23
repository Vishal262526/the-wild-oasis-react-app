import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    :root {
        /* Indigo  */
        --color-brand-50: #eef2ff;
        --color-brand-100: #e0e7ff;
        --color-brand-200: #c7d2fe;
        --color-brand-500: #6366f1;
        --color-brand-600: #4f46e5;
        --color-brand-700: #4338ca;
        --color-brand-800: #3730a3;
        --color-brand-900: #312e81;

        /* Grey  */
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #fb5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        /* Colors */
        --color-blue-100: #e0f2fe;
        --color-blue-700: #e0f2fe;
        --color-green-100: #e0f2fe;
        --color-green-700: #e0f2fe;
        --color-yellow-100: #e0f2fe;
        --color-yellow-700: #e0f2fe;
        --color-silver-100: #e0f2fe;
        --color-silver-700: #e0f2fe;
        --color-indigo-100: #e0f2fe;
        --color-indigo-700: #e0f2fe;


        /* Red */
        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 62.5%;
    }

    body {
        font-family: "poppins" sans-serif;
        color: var(--color-brand-700);
    }

    input , button , textarea , select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    select:disabled, input:disabled {
        background-color: var(--color-grey-200);
    }

    input:focus, button:focus , textarea:focus, select:focus {
        outline: 2px solid var(--color-brand-600);
    }

    button:has(svg) {
        line-height: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    p , h1 , h2 , h3 , h4 , h5 , h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }
    img {
        width: 100%;
    }
    

`

export default GlobalStyle;