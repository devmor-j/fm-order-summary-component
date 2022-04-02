# Frontend Mentor - Order summary card solution

This is my solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

Desktop (1536px):

![Desktop screenshot](./screenshot/Desktop%20-%20Order%20summary%20card.webp)

Mobile (375px):

![Mobile screenshot](./screenshot/Mobile%20-%20Order%20summary%20card.webp)

### Links

- Solution URL: [Github Repo](https://github.com/devmor-j/fm-order-summary-component/)
- Live Site URL: [Github Pages](https://devmor-j.github.io/fm-order-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Build and development tool
- [WindiCSS](https://windicss.org/) - Main framework for CSS styling

### What I learned

I used WindiCSS - Next generation utility-first CSS framework and that is sure true :)

WindiCSS is really awesome, I think it's ready for production use and adoption. I enjoyed using attributify feature to separate some classes which makes css styles even more readlible.

The way I used it was that everything should go into `class="..."` as before but only styles that effect visual things like *color, size, background, text, border, ...* should be applied using attributify syntax. For example:


```html
<element w:text="center blue-500 2xl">
```
Is equal to:

```html
<element class="... text-center text-blue-500 text-2xl ...">
```

> (`w:` is the [optional prefix](https://windicss.org/features/attributify.html#prefix))

Layout and composition classes like `flex`, `px-4`, `w-full`, `space-y-8`, ... are added directly inside html *class* attribute.

With this mindset, styling can become very easy. Now I know when I'm adjusting *paddings* and *display* properties, don't have to crawl a long string just to find where things are.

Another example: Don't write your css inside a giant string text :) like this (copied from [this project](https://github.com/devmor-j/fm-stats-preview-card-component)):

```html
<element class="bg-clr-card | max-w-[18rem] sm:max-w-6xl mx-4 | flex flex-col sm:flex-row-reverse gap-2 | text-[14px] lg:text-[15px] text-center sm:text-left | rounded-xl border border-clr-main">
  ```

  > As you can tell I used `|` character to divide classes which is inspired by [Cube CSS](https://cube.fyi/grouping.html).
  
  Instead we can write that line with WindiCSS like this:

  ```html
<element 
class="max-w-[18rem] sm:max-w-6xl mx-4 | flex flex-col sm:flex-row-reverse gap-2 | sm:text-left" 
bg="clr-card" 
text="[14px] center" lg:text="[15px]" 
rounded="xl" 
border="1 clr-main">
  ```

> Or using a prefix like `w:` for each attribute which is the way I prefer and that prevents any collisions with the html attributes themselves.

  ```html
<element 
class="max-w-[18rem] sm:max-w-6xl mx-4 | flex flex-col sm:flex-row-reverse gap-2 | sm:text-left" 
w:bg="clr-card" 
w:text="[14px] center" w:lg:text="[15px]" 
w:rounded="xl" 
w:border="1 clr-main">
  ```

WindiCSS is fully compatible with TailwindCSS v2. Read more at [WindiCSS Guide](https://windicss.org/guide/).

## Author

- Frontend Mentor - [@devmor-j](https://www.frontendmentor.io/profile/devmor-j)
