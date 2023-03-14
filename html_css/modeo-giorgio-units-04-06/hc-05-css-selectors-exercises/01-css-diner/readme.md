<plate>
    select all elements with the tag name "plate"

<bento>
    select all elements with the tag name "bento"

<#fancy>
    select the element with the id "fancy"

<plate apple>
    select all elements with the tag name "apple" that are descendants of an element with the tag name "plate"

<#fancy pickle>
    select the element with the tag name "pickle" that is a direct descendant of the element with the id "fancy"

<.small>
    select all elements with the class "small"

<orange.small>
    select all elements with the class "small" that are elements with the tag name "orange"

<bento orange.small>
    select all elements with the class "small" that are descendants of an element with the tag name "orange" which is itself a descendant of an element with the tag name "bento"

<plate, bento>
    select all elements with the tag name "plate" or "bento"

<*>
    select all elements on the page

<plate *>
    select all elements that are descendants of the element with the tag name "plate"

<plate + apple>
    select the element with the tag name "apple" that is the immediately following sibling of the element with the tag name "plate"

<bento ~ pickle>
    select all elements with the tag name "pickle" that are siblings of an element with the tag name "bento" and appear after it

<plate > apple>
    select all elements with the tag name "apple" that are direct children of an element with the tag name "plate"

<orange:first-child>
    select all elements with the tag name "orange" that are the first child of their parent

<plate apple:only-child, plate pickle:only-child>
    select the elements with the tag name "apple" or "pickle" that are the only child of the element with the tag name "plate"

<.small:last-child>
    select all elements with the class "small" that are the last child of their parent

<plate:nth-child(3)>
    select the element with the tag name "plate" that is the third child of its parent

<bento:nth-last-child(3)>
    select the element with the tag name "bento" that is the third child of its parent, counting from the end

<apple:first-of-type>
    select the first element with the tag name "apple" of its type

<plate:nth-of-type(even)>
    select all elements with the tag name "plate" that are of even type

<plate:nth-of-type(2n+3)>
    select every third element with the tag name "plate"

<plate apple:only-of-type>
    select the element with the tag name "apple" that is the only element of its type among the descendants of the element with the tag name "plate"

<orange:last-of-type, apple:last-of-type>
    select all elements with the tag name "orange" and "apple" that are the last element of their type within their parent.

<bento:empty>
    select all elements with the tag name "bento" that have no children or only have empty or whitespace-only text.

<apple:not(.small)>
    select all elements with the tag name "apple" that do not have the class "small".

<*[for]>
    select all elements that have a "for" attribute.

<plate[for]>
    select all elements with the tag name "plate" that have a "for" attribute.

<bento[for="Vitaly"]>
    select all elements with the tag name "bento" that have a "for" attribute with the value "Vitaly".

<*[for^="Sa"]>
    selects all elements that have a 'for' attribute with a value starting with "Sa".

<[for$="ato"]>
    selects all elements that have a 'for' attribute with a value ending with "ato".