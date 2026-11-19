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

## Email delivery (contact form and network applications)

Both the contact form (`POST /api/contact`) and the professional network application form (`POST /api/network-application`, opened from `/join-network`) send through the same Resend account.

- **From:** `noreply@platinumaccolades.co.bw` on both routes, fixed in code since that domain is the one verified in Resend. It isn't configurable via environment variable.
- **To:** `process.env.CONTACT_TO_EMAIL`, falling back to `platinumaccolades@gmail.com` if unset. Set `CONTACT_TO_EMAIL` in the deployment to control the destination inbox for both forms at once.
- **Reply-To:** the email address the visitor or applicant entered in the form, so replying from the inbox goes straight back to them.

Configure these server-side environment variables in the deployment:

- `RESEND_API_KEY`: an email-sending API key.
- `CONTACT_TO_EMAIL`: destination inbox for both the contact form and network applications.
- `NEXT_PUBLIC_SITE_URL`: the deployed website URL.

A sending-only API key cannot list or verify sender domains; `noreply@platinumaccolades.co.bw` must already be verified in the Resend account for either form to deliver.

Neither route reports success unless Resend actually confirms delivery. If `RESEND_API_KEY` is missing/unconfigured, or Resend returns an error or no message ID, the route returns an error response instead of a fake success — the contact form previously always reported success even when the email silently failed to send; it no longer does.

For the network application specifically: a CV is required, with up to two optional supporting documents. Accepted files are PDF, DOCX, JPG and PNG, with a 2 MB limit per file and a 3 MB combined limit. The server checks file signatures (not just the extension), required fields, consent, origin and total request size. Documents are processed in memory and passed to the email provider; this route does not write them to disk. A stable request ID is passed to Resend for retry deduplication, and the route has a basic per-instance limit of five attempts per IP per ten minutes.

Run `npm run test:application` for request-validation, upload and delivery tests on the network application route. These tests mock Resend and send no real email. Both inboxes should be checked separately with an authorised live submission after deployment.
