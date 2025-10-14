FROM oven/bun:latest

WORKDIR /app

RUN apt-get update && apt-get install -y openssl curl

COPY package* bun.lock* ./
COPY prisma ./prisma

RUN bun install

COPY . .

RUN bunx prisma generate

EXPOSE 3000

CMD ["bun", "index.ts"]

