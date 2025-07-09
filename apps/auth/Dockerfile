# dev
FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

# prod
FROM node:20-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN npm install -g pnpm

RUN pnpm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]
