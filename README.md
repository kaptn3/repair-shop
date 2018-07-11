## Section
Landing page have four sections: carousel (in project -- carousel), "Get Your Repair Started" (in project -- devices), "Why choose us" (features), "Our work Process" (process).
Their html store in `_includes/section`. Also, setting up content of this sections store in `_data`. For example, you want change or add feature. So, you open `_data/features.yml` file and edit it. 

## Navigation
Setting up of menu in site header store in `_data/navigation.html`. 

## Scripts
All javascript file include in bottom html. So, they include in `_includes/scripts.html`.

## Scss
Layouts and includes of Jekyll Site correspond to Scss file. For example,

`_includes/header.html` ~> `_sass/layout/header.scss`
`_includes/footer.html` ~> `_sass/layout/footer.scss`
`_includes/navbar.html` ~> `_sass/layout/navbar.scss`

Styles of sections stored in one file `_sass/layout/sections.scss`.