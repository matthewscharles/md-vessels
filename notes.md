# More alternatives
We could search for the hyphen, to make sure there's a split between object name/class and attributes, and miss out the first # like so:
- filter1.Filter - frequency:100, resonance:1

## Nested connection
An optional longer form could be: _this_.audio - speaker._audio_ (defaults marked in italics).
Or just audio - speaker.audio since the connection is nested/belongs to the object above.
We're expecting multiple ports per object. For example, an oscillator output could go to filter.audio but also filter.cutoff etc.


Is it more confusing to have multiple options this way? It feels natural to me (e.g. missing out semicolon at end of line, syntactic sugar in JS like the conditional operator)

## Dictionary style
Why not accept information formatted for Javascript? i.e. maintaining curly brackets..

What about CoffeeScript/Python style notation? Since this fits with the typical objects (e.g. Tone):

filter1:
    class:filter
    type:lowpass
    frequency:100

Too longwinded for me.

Another alternative: use a tag name instead of class:
Filter#filter1 - type:lowpass, frequency:100

Or..use tag name to differentiate objects, gui, and cable.  We could set up custom tag names to make these valid HTML elements down the line if need be..