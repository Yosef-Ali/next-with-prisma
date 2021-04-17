This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
yarn create-next-app
# or
npm create-next-app
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add Database

Prisma ORM

```bash
yarn add prisma --dev
```

### Setup a new Prisma project

```bash
yarn add @prisma/client
```

### Setup a new Prisma init

```bash
npx prisma init
```

### Define datasource

```bash
datasource db {
  provider = "sqlite"
  url      = "file:./dav.db"
}
```

### Define model

model posts {
id Int @id @default(autoincrement())
title String
description String
}

### Create migrations from your Prisma schema, apply them to the database, generate `Prisma Client`

```bash
npx prisma migrate dev
```

### Browse your data

```bash
npx prisma studio
```

<!-- ### Generate artifacts (e.g. Prisma Client)

npx prisma generate -->
