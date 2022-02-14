<p id='patcher'></p>

# HTML / pug style:
The # sign followed by the name of the object
The . sign followed by the class of object

- #osc .Oscillator = frequency:100, type:sawtooth

# New style
- name:filter1, type:Filter - frequency:100, resonance:1
  - audio - speaker
- #speaker .output

# Additional items
[ ] checkbox (github only)

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
