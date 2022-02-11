Front End Assessment

Font:  
Setting up the fonts was done by linkin the specific fonts via a link tag to google fonts. The page will use this cdn to use the font faces.

Site Logos:
 To account for retina screens a media query was added to change the source of the logo to the higher res image in the images folder. This will apply better resolution for those streams with a specific DPI threshold.

Icons:  
  Downloaded the missing pngs from google
  Added the icons to the html and applied styles

Navigation:

Navigation was done by adding on click functionality to the hamburger menu. Clicking the hamburger icon will toggle the styles appended to the navigation to change its display from “none” to “block” and vice-versa. The style must be displayed as a block in the desktop size media query to prevent the mobile functionality from hiding the styles in the desktop view.

The on click functionality is done via a function in the js file, and triggered by the press of the nav icon

Slideshow:
  I created another slide for the slideshow by including a new image of a baby from google because a second one was not provided

The slideshow functionality is in the js file that toggles the display of the block depending if the current index of the html collection of that specific class is currently being viewed. This runs on a setTimeout which changes the slides automatically every 3 seconds.

 Some styles that were added:
A colored inset to mimic the inside border of the slide
2 color opacity linear gradients from different angles to match the effect on the slide content
Max height and width of the slide to allow different pictures to be viable for the slide show
Text shadow for readability


Footer:
 Added social media icons to html from the images folder in a flex box orientation

The accordion was created by giving the toggle div onclick functionality to trigger a function that toggles the .hide class on the accordion panels. This is a common design pattern of disclosure.

The bottom footer was moved from its container by using absolute positioning
It was then styled with flexbox and with reverse-column and row depending on the viewport size and design.

There were alot of small changes to font sizes and heights to accommodate the design for mobile


Responsive:

Added styling so the html and body would take up full height and width of the viewport. Removed the horizontal scroll by adding overflow-x: hidden.

For the tablet sizes, a 2nd media query would be beneficial to ease the styles from mobile to desktop viewports. Many design systems use a 3 breakpoint system/theme to style websites

There was also a type when importing the normalize css file

Improvement insights

Create a styling theme so there is less redundancy when creating styles for various components. This can help developer experience and make consistent styles overall

Light + Dark Theme

Mobile first approach when it comes to design. The desktop styles were much more complete than the mobile view

Animation effects

Hover effects for gallery items

Generated Sitemap for SEO purposes




