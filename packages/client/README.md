## Akkimi Web

- 배포 (deploy)
  lazodoer repo -> (clone) -> canoe918@lazydoer -> vercel (free)

- 패키지 매니저

```bash
npm i -g yarn@berry
yarn set version berry
yarn install
```

- 프로젝트 실행

```bash
yarn dev
```

- 스토리북 실행

```bash
yarn storybook
```

- .env 설정

```bash
NEXT_PUBLIC_BASE_API_URL=
NEXT_PUBLIC_SUPABASE_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_NODE_ENV=
NEXT_PUBLIC_KAKAO_AUTH_KEY=
```

- supabase 명령어

```bash
brew install supabase/tap/supabase

supabase login
supabase gen types typescript --project-id [id] > database.types.ts
```
