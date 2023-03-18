The three codes show three different ways to use CSS to style HTML content.

The first code embeds the CSS inside the HTML file using the <style> tag inside the <head> tag. CSS is then applied to all elements that match the rules defined within the style declarations.

The second code instead uses an external CSS file, called "main.css", which is imported into the HTML file using the <link> tag inside the <head> tag. The CSS file contains styling rules that are applied to corresponding elements within the HTML file.

The third code instead uses the style property directly on the HTML elements, without using external or internal CSS. The style property defines the style rules for each element in a specific way, but it can become difficult to manage in case of complex HTML pages with many style rules.

In summary, the use of external CSS allows you to separate the structure and HTML content from the visual presentation, improving the readability and maintainability of the code. Using the style property is best suited for quick style changes or for specific customizations of a single HTML element.