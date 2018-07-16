# Step to setup site
1. Fork or download this repository
2. Change `baseurl` variable in `_config.yml`.

# Features
## Section
Landing page have four sections: carousel (in project -- carousel), "Get Your Repair Started" (in project -- devices), "Why choose us" (features), "Our work Process" (process).
Their html store in `_includes/section`. Also, setting up content of this sections store in `_data`. For example, if you want change or add feature, open `_data/features.yml` and `_data/features-top.yml` (store header and description of section) files and edit its. All data have two languages: English (default, en) and Greece (el).

## Navigation
Setting up of menu in site header store in `_data/navigation.html`. 

## Scripts
All javascript file include in bottom html. So, they include in `_includes/scripts.html`.

## Scss
Layouts and includes of Jekyll Site correspond to Scss file. For example,

`_includes/header.html` ~> `_sass/layout/header.scss`  
`_includes/footer.html` ~> `_sass/layout/footer.scss`  
`_includes/navbar.html` ~> `_sass/layout/navbar.scss`  
`_includes/sections/section-top.html` ~> `_sass/components/section-top.scss`  

Styles of sections stored in one file `_sass/layout/sections.scss`.

Used (BEM)[https://ru.bem.info/methodology/naming-convention/] for name of classes.

## Contacts
Setup contacts may be set up in `_config.yml`.