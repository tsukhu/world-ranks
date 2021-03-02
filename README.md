This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Objective

Experiments with NextJS 10.

. This has been extended to try out different features of NextJS 10.

### Additions and changes made   
    - Minor bug fixes
    - Styling adjustments
    - Mapbox support
    - Worldbank API added using `getServerSideProps`. Click on the country flag in the country detailed view .
    - Added progress indicators
    - react-icons instead of material-ui icons
    - Image Optimization - Image Component
    - Infinite Scroll for country list
    - SEO fixes
    - Context API for maintaining filtered state
    - Security Headers
    - Performance improvements - Image Lazy Loading , Pagination (Infinite Scroll)
    - Added pure client side rendered path (/weather) that uses `react-query`
    - Moved to Typescript
    - Types code gen for graphql using apollo client
    - i18n based router

## Current Results

    - Lighthouse:
        - Desktop ~100%
        - Mobile  ~89%
    - Web Page Test
        - Security          : A
        - First Byte Time   : A
        - FCP               : ~1 sec
        - Speed Index       : ~1 sec

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Types generated using apollo

```sh
apollo codegen:generate  
    --includes=src/**/*.tsx 
    --endpoint https://graphql-weather-api.herokuapp.com 
    --target typescript 
    --tagName=gql 
    --outputFlat src/generated
```

## Credits

Based on and extended from the live coding video by [Thu Nghiem](https://www.youtube.com/watch?v=v8o9iJU5hEA)
