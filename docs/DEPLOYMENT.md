# Deployment

## Local

```bash
cp .env.example .env
npm install
npm test
npm run dev
```

## Docker

```bash
docker build -t clouddesk-helpdesk .
docker run --env-file .env -p 3000:3000 clouddesk-helpdesk
```

## Cloud

Deploy app to Vercel/Render/Azure App Service. Use managed PostgreSQL. Store files in S3/Azure Blob/GCS. Provision cloud resources with Terraform.

## Environment Variables

See `.env.example`.

## Smoke Test

After deployment:

1. Open the health endpoint or homepage.
2. Confirm database-backed routes work.
3. Check logs for errors.
4. Capture screenshot for README.
