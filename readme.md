# Moyo header
Create HTML page with the header using `flexbox` based on the [Figma Mockup](https://www.figma.com/file/1sog2rmfyCjnVxkeZ3ptnc/MOYO-%2F-Header?node-id=0%3A1&mode=dev).

The page should match the design Pixel Perfect: all the sizes, colors and distanced MUST be the same as on the design.

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

## Requirements:

1.- reset browser default margins.
2.- use [Roboto font](https://fonts.google.com/specimen/Roboto)
3.- use semantic tags: `<header>`, `<img>`, `<nav>`, `<ul>`, `<li>` and `<a>`
4.- the header should stretch the full page width
5.- the height should be set for nav links (not the header), take it from the design.
6.- header content should be vertically centered.
7.- Logo should also be a link with an image inside (from [src/images](src/images)). But it should not be a part of the `<nav>`.
8.- ❗️ the blue link with a line below should have a class `is-active` in addition to any other classes you add.
9.- ❗️ add `data-qa="hover"` attribute to the 4th link for testing (`Laptops & computers`)
10.- link color should be changed on `:hover`
11.- Use the `::after` and position it relative to a link with `is-active` class
12.- Don't use flex `gap` property for indents. It's not supported in tests, use `margin` instead.
13.- There should not be margins before the first and after the last list items
14.- Don't just copy all styles from Figma. Think, which of them are relevant. Uneven sizes (e.g. `line-height: 14.6px`) are definitely useless.
15- Nav Links should not have any padding, but have text centered

## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:

- [DEMO LINK](https://nila20.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://nila20.github.io/layout_moyo-header/report/html_report/)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [x] Header height is set in 1 place (for the links)
- [х] Content is vertically centered (for any header height)
- [х] CSS is used to show all letters in Uppercase (don't type them in HTML)
- [х] Logo is an image wrapped with a link
- [x] **CSS Variable** is used for a blue color
- [x] Pseudo-element is used for a blue line below the active link
- [x] Code follows all the [Code Style Rules ❗️](./checklist.md)
