# Social Video Header

This is a small tool for creating social header. There are two variants, one with profiles and the other with footnotes.

## How to use it

Simply replace your JSON in the content searchParam as shown below.

https://social-tools.kadena.io/update/?content={REPLACE_WITH_YOUR_JSON}

Data Type

```ts
type TContent = {
  title: string
  seqUpdate?: string // appends a #{seqUpdate} after the title
  subtitle: string
  profile?: {
    image?: string
    name: string
    title: string
    account?: string
  }[]
  footer?: {
    title: string
    subtitle?: string
  }
  tags?: string[]
  links?: string[]
  theme?: 'dark' | 'light' // dark is default
}
```

Example #1

```json
{
  "title": "Builder Call",
  "subtitle": "Connecting the Chains",
  "seqUpdate": "2",
  "tags": ["LiveNow"],
  "footer": {
    "title": "Friday April 28th, 2023",
    "subtitle": "16:00 - 18:00 CET"
  }
}
```

Example #2

```json
{
  "title": "Academy Platform Workshop",
  "subtitle": "Build the future on Kadena",
  "profile": [
    {
      "image": "https://pbs.twimg.com/profile_images/1631645715943288834/P1rt7Yx5_400x400.png",
      "name": "Davy Engone",
      "title": "Engineer",
      "account": "@davyengone"
    },
    {
      "image": "https://pbs.twimg.com/profile_images/1525968876995022849/RuI_HOx9_400x400.jpg",
      "name": "Randy Daal",
      "title": "DX Team Lead",
      "account": "@Randynamic_4"
    }
  ],
  "tags": ["AvailableNow"],
  "links": ["academy.kadena.io"]
}
```