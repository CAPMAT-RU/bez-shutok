```typescript
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
// Указываем, что в наших постах обязательно должны быть эти поля
schema: z.object({
title: z.string(),
pubDate: z.date(),
description: z.string(),
}),
});

export const collections = {
'posts': posts,
};
```
