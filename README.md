# Ant Design Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ai)](https://jsr.io/@preact-icons/ai)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

[See available icons here](https://react-icons.deno.dev/ai)

## install the module

```bash
deno add @preact-icons/ai
dnpx jsr add @preact-icons/ai
pnpm dlx jsr add @preact-icons/ai
bunx jsr add @preact-icons/ai
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { AiFillAccountBook } from "@preact-icons/ai"
```

## import a single icon, downloading just one icon

```ts
import { AiFillAccountBook } from "react-icons/ai/AiFillAccountBook"
```

or using default export

```ts
import AiFillAccountBook from "react-icons/ai/AiFillAccountBook.ts"
```
