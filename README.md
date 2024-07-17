# Ant Design Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

[See available icons here](https://react-icons.deno.dev/ai)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/ai": "jsr:@preact-icons/ai@^1.0.10/mod.ts",
    "react-icons/ai/": "jsr:@preact-icons/ai@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ai

```ts
import { AiFillAccountBook } from "jsr:preact-icons/ai@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { AiFillAccountBook } from "react-icons/ai"
```

## import a single icon, downloading just one icon

```ts
import { AiFillAccountBook } from "react-icons/ai/AiFillAccountBook.ts"
```

or using default export

```ts
import AiFillAccountBook from "react-icons/ai/AiFillAccountBook.ts"
```

