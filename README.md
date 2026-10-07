# Money-Mate

Money-Mate is a personal finance dashboard built with Next.js for tracking income, expenses, categories, and overall budget health. It helps users monitor their spending trends over custom date ranges and manage transactions in a simple, modern interface.

## Features

- Secure sign-in and sign-up flow with Clerk
- Create, view, and manage income and expense transactions
- Custom category setup with icons and transaction types
- Overview dashboard with income, expense, and balance cards
- Date-range based financial insights and category breakdowns
- Currency personalization per user
- Responsive UI powered by Tailwind CSS and shadcn/ui
- PostgreSQL persistence with Prisma ORM

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Clerk authentication
- shadcn/ui

## Project Structure

```bash
app/
  (auth)/
  (dashboard)/
  api/
  wizard/
components/
  ui/
lib/
prisma/
schema/
```

## Prerequisites

Before running the app locally, make sure you have:

- Node.js 18+ or newer
- npm or pnpm
- PostgreSQL database
- Clerk account and project credentials

## Getting Started

1. Clone the repository

```bash
git clone <your-repository-url>
cd Money-Mate
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the project root with the following values:

```bash
POSTGRES_PRISMA_URL="postgresql://user:password@host:5432/database?sslmode=require"
POSTGRES_URL_NON_POOLING="postgresql://user:password@host:5432/database?sslmode=require"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/wizard"
```

4. Initialize the database

```bash
npx prisma generate
npx prisma db push
```

5. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Database

This project uses Prisma with PostgreSQL. The schema includes user settings, categories, transactions, and monthly/yearly history tables for budgeting analytics.

## Deployment

This app is designed to work well with Vercel. For deployment:

- Add the same environment variables in your hosting provider
- Configure your PostgreSQL connection strings
- Set up Clerk environment values in the dashboard
- Build and deploy the app through your platform of choice

## Notes

The app includes a setup wizard for first-time users to choose their default currency and get started with the dashboard.

## License

This project is currently unlicensed unless you add a license file and specify the terms.
