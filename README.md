# 21doruidesign

# Resources
1. https://stackoverflow.com/questions/37386244/what-does-flex-1-mean

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
6. 