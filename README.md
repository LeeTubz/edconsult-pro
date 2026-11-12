This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Professional network applications

The homepage application button opens `/join-network`. The form sends a multipart request to `POST /api/network-application`. Application details and document attachments are emailed using the existing Resend integration.

Configure these server-side environment variables in the deployment:

- `RESEND_API_KEY`: an email-sending API key.
- `APPLICATION_EMAIL`: destination inbox; falls back to `CONTACT_EMAIL`, then the site's existing Gmail inbox.
- `APPLICATION_FROM_EMAIL`: sender on a domain verified in Resend. Falls back to `CONTACT_FROM_EMAIL`, then the sender already used by the contact endpoint.
- `NEXT_PUBLIC_SITE_URL`: the deployed website URL.

A sending-only API key cannot list or verify sender domains. Set the sender to an address on the verified domain in your Resend account.

A CV is required. Up to two supporting documents are optional. Accepted files are PDF, DOCX, JPG and PNG, with a 2 MB limit per file and a 3 MB combined limit. The server checks file signatures, required fields, consent, origin and total request size. Documents are processed in memory and passed to the email provider; this application does not write them to disk.

Confirmation is returned only when Resend supplies a message ID. Provider errors and missing configuration return an error so the applicant can retry without losing their form entries. A stable request ID is passed to Resend for retry deduplication. The route also has a basic per-instance limit of five attempts per IP per ten minutes.

Run `npm run test:application` for request-validation, upload and delivery tests. These tests mock Resend and send no real email. The sending inbox should be checked separately with an authorised live submission after deployment.
