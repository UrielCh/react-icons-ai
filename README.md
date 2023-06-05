# Ant Design Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

[See available icons here](https://react-icons.deno.dev/ai)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ai":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ai@1.0.9/mod.ts",
    "react-icons/ai/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ai@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ai

```ts
import { AiFillAccountBook } from "https://deno.land/x/react_icons_ai@1.0.9/mod.ts"
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

