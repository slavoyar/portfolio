FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Production Image
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/.output .output

ENV NITRO_PORT=80

EXPOSE 80
CMD ["node", ".output/server/index.mjs"]
