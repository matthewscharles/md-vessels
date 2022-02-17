# About this document

Rough notes (CM), trying to get together a spec, so these are not very accessible as instructions.

# Shorthand version
This borrows from HTML-style notation for id and class -- I was initially working on this in Pug
Bullet point per item is optional, but we can use these to group objects together (i.e. left-most outlets automatically connected within a ul group)

- Object: the # sign followed by the name of the object
- Class . sign followed by the class of object

Spaces optional.

An optional hyphen or equals sign marks the end of the object name/class. 
This helps pace the screenreader output as well as giving a visual marker.
(nb I originally used > especially since this implies some sort of arrow/allocation, but this reads as 'greater than')

Arguments/attributes follow.
Optional comma between attributes for visual separation/screen reader pause.

## Example
Same oscillator object -- first is spaced for screenreader and visual ease, second is the way I usually type my objects out in Pug.
- #osc .Oscillator - frequency:100, type:sawtooth
- #osc.Oscillator frequency:100 type:sawtooth

# Longhand version
This version also adds a connection written directly into the object notation.  I would prefer GitHub's nested blockquotes for this to be honest, since the bullet points don't read out nicely in VoiceOver.
- Object: here instead of # we write name followed by colon and the name of the object
- Class: as above

A nested second level bullet point describes a connection (with a hyphen and optional spaces between the target and destination).

## Example
- name:filter1, type:Filter - frequency:100, resonance:1
  - audio - speaker
- name:speaker class:output

# Dedicated connection list
This could be in addition to and even include duplicates from the nested connections above.

Object outlets / parameters use standard dot notation (and could use brackets, why not?)

## Example
- osc1.audio - filter1.audio 
- filter1.audio - speaker.audio

Alternatively, if this causes confusion with the dot notation for classes, it could accept:
- osc1:audio - filter1:audio


# More alternatives
We could search for the hyphen, to make sure there's a split between object name/class and attributes, and miss out the first # like so:
- filter1.Filter - frequency:100, resonance:1

## Nested connection
An optional longer form could be: _this_.audio - speaker._audio_ (defaults marked in italics).
Or just audio - speaker.audio since the connection is nested/belongs to the object above.
We're expecting multiple ports per object. For example, an oscillator output could go to filter.audio but also filter.cutoff etc.


Is it more confusing to have multiple options this way? It feels natural to me (e.g. missing out semicolon at end of line, syntactic sugar in JS like the conditional operator)

What about CoffeeScript/Python style notation? Since this fits with the typical objects (e.g. Tone):

filter1:
    class:filter
    type:lowpass
    frequency:100

Too longwinded for me.

Another alternative: use a tag name instead of class:
Filter#filter1 - type:lowpass, frequency:100

Or..use tag name to differentiate objects, gui, and cable.  We could set up custom tag names to make these valid HTML elements down the line if need be..

# Other notes
Should be flexible with spaces around the colons, longer term..

# Patcher test space

<div id='patcher'></div>

<script>
    var output = {};

    function run(){
        document.getElementById('patcher').innerHTML = '';
        document.querySelectorAll('li').forEach((x,i)=>{
            x.setAttribute('class','red');
            x.id = `original${i}`
            console.log(x.children.length)
            if(x.children.length>0)console.log(Array.from(x.children).filter(item=>item.tagName == 'UL'))
            if(x.innerHTML.split('<ul>').length>1)console.log(x.innerHTML.split('<ul>')[1].split('</ul>')[0])
            let listItem =  patcher.appendChild(document.createElement('button'));
            listItem.innerHTML = x.innerHTML;
            listItem.id = `item${i}`
        })
    }
    run();
</script>
