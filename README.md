# Ant Design Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=ai)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ai":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ai@1.0.1/mod.ts",
    "react-icons/ai/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ai/ico/",
  }
}
```

## Direct import sample

`import { AiFillAccountBook } from "https://deno.land/x/react_icons_ai@1.0.1/mod.ts"`

## import_map import sample

`import { AiFillAccountBook } from "react-icons/ai"`

## minimal import

`import { AiFillAccountBook } from "react-icons/ai/AiFillAccountBook.ts"`

## minimal import default

`import AiFillAccountBook from "react-icons/ai/AiFillAccountBook.ts"`

