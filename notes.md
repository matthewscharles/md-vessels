# Learning from this experience
Dynamically generated td elements seem to need to be assigned the role 'gridcell' explicitly..or perhaps tables within details tags are behaving strangely.

# More alternatives
We could search for the hyphen, to make sure there's a split between object name/class and attributes (or alternatively require the . to be joined), and miss out the first # like so:
- filter1.Filter - frequency:100, resonance:1

## Nested connection
An optional longer form could be: _this_.audio - speaker._audio_ (defaults marked in italics).

- filter1.Filter - frequency:100, resonance:1
    - this.audio - speaker.audio

Or just audio - speaker.audio since the connection is nested/belongs to the object above.
We're expecting multiple ports per object. For example, an oscillator output could go to filter.audio but also filter.cutoff etc.


Is it more confusing to have multiple options this way? It feels natural to me (e.g. missing out semicolon at end of line, syntactic sugar in JS like the conditional operator)

## Dictionary style
Why not accept information formatted for Javascript? i.e. maintaining curly brackets..

- #filter1.Filter{frequency:100, resonance:1}
(confusing without the usual parentheses?)

And sub-objects in general? Like addressing the filter object nested within an autofilter, etc..

What about CoffeeScript/Python style notation? Since this fits with the typical objects (e.g. Tone):

filter1:
    class:filter
    type:lowpass
    frequency:100

Another alternative: use a tag name instead of class:
Filter#filter1 - type:lowpass, frequency:100

Or..use tag name to differentiate objects, gui, and cable.  We could set up custom tag names to make these valid HTML elements down the line if need be.