# Moyo header
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://HachevskyyMarkiyan.github.io/layout_moyo-header/)
- [TEST REPORT LINK](https://HachevskyyMarkiyan.github.io/layout_moyo-header/report/html_report/)

> Follow [these instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)

## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/layout_moyo-header/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

## The task
Create HTML page with the header using `flexbox` basing on [this mockup](https://www.figma.com/file/1sog2rmfyCjnVxkeZ3ptnc/MOYO-%2F-Header?node-id=0%3A1).

![screenshot](./references/header-example.png)

### Requirements:
Q - pay attention the mock is adaptive. Develop the layout to fit on 1024px and 1200px the same as on the mock.
Q - reset browser default margins
Q - use images from [src/images](src/images)
Q - use semantic tags: `<header>`, `<nav>`, `ul`
Q - change links styles on `:hover`
Q - follow styles from the mock
Q - the link with `blue` color and line below is an active link. It should have `class="is-active"` and relevant styles.
Q - the link with only `blue` color is an example of `:hover` styles. Every link in the row should have `blue` color on `:hover`.
Q - add `data-qa="hover"` attribute to the 4th link for testing (`Laptops & computers`)
---
--> [CHECKLIST](https://github.com/mate-academy/layout_moyo-header/blob/master/checklist.md)

### Tips & Hints
Q - Don't use `gap` property for indents. It's not supported in tests, use `margin` instead.
Q - Check one more time if you added `data-qa="hover"` and `class="is-active"`
required for tests
Q - Do not use `tabs`. Use `2 spaces` for indentation.
Q - Don't use repeated styles.
Q - Don't just copy all styles from Figma. Think, which of them are relevant.
Uneven sizes (e.g. `line-height: 14.6px`) are definitely useless.
Q - Don't use extra elements for blue line. Figure out how to work with `::after`
and positioning
Q - Check font styles. Use [google fonts](https://fonts.google.com/)
Q - Links in `nav` should have clickable area above and below the text
Q - Uppercase letters for `nav__list` are made with styles, not hardcoded into
html (you should have usual text with first uppercase letter in html)
Q - Don't set height for `header` explicitly. Let the content (links) dictate it.
Q - Logo should also be a link to the main page of the website (#home). But it
should not be part of `nav`.
