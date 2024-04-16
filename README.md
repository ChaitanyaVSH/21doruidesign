# 21doruidesign

# Resources
1. https://stackoverflow.com/questions/37386244/what-does-flex-1-mean

## Todo
1. Come up with personalized design checklist and template as a starter pack.

### Day 1
1. Percentages vs Fixed widths
2. Percentages on child elements
3. It is good to avoid heights

### Day 2
1. em vs rem units
2. Avoiding em for font sizes

### Day 3
1. Adding in max width

### Day 4
1. vw vh vmax vmin units

### Day 5
1. Practice on challenge 03

### Day 6
1. Review of all above
2. Why we should not use ems on font-sizes

### Day 7
1. Challenge 03 solution
   1. Do not need paddings on left and right when we are using showcase and container together
2. Box sizing: Border-box explanation

### Day 8
1. FlexBox basics
   1. Many key points on flex -items
      1. Flex items tries to be as small as possible based on it’s content
      2. To force flex items to occupy the entire space it deserves, we need to set width:100%
      3. flex:1 also behaves as above
2. Spacing b/w columns
   1. Use gap
   2. Use combinator selectors
3. FlexBox challenge 01

### Day 9
1. FlexBox challenge 01 solution
   1. We can use either three-col and two-col approach or use specific class names for specific behaviours
   2. Combine class names on same div to reduce the number of divs or html
2. Adding a hero image
   1. If we are placing image inside a div, the div stretches based on the tallest other flex-item, but not the image
   2. If we are making image directly a flex item, then it stretches to the tallest element possible
      1. We can control the alignment using align-self property
3. Columns widths
   1. We can control individual colum width using width property
   2. We can control the space between columns using justify-content property
4. Responsive image
   1. Use max-width: 100% to let image shrink if it is inside a flex-item
   2. Set align-self: start if image is directly the flex-item to prevent stretch effect on the image based on the space
   3. If the image is set inside some div or span, there will be no stretch effect by default.
5. FlexBox challenge 02
   1. Using gap in FlexBox along with explicit widths on flex-items might make things unpredictable.s

### Day 10
1. Deeper dive into FlexBox

### Day 11
1. Using FlexBox for navigation
2. FlexBox challenge 03
   1. Using FlexBox for Navigation use cases
   2. We can add space between the flex items using margin right/left, gap or .col + .col selector

### Day 12
1. Fancy with navigation
   1. We can push the flex items to the right side by using
      1. margin-left: auto trick
         1. auto margin adjusts the available margin based on the left or right property specified
      2. Grouping different ul list and separating them using horizontal spacing properties
   2. More improvements by adding logo
      1. Pushing certain flex items all the way big by using width 100% trick or flex grow property
   3. Centering things the easy way
      1. Use the margin: 0 auto trick
      2. Use the flex grow: 1 and Justify-content:center also
2. FlexBox Challenge 04

### Day 15
Media Queries
1. Media types and Media features
2. Mobile first vs Desktop first design
3. Order of media queries matters

### Day 16
What breakpoints to use ?
https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/


### Day 17
The viewport meta tag
<meta name="viewport" content="width=device-width, initial-scale=1.0">
