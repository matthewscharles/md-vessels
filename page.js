 var output = {};

    function run(){
        document.getElementById('source').innerHTML = document.body.innerHTML.substring(document.body.innerHTML.indexOf('.beginPatch') + 11,document.body.innerHTML.indexOf('.endPatch'));
        document.getElementById('patcher').innerHTML = '';
        document.getElementById('source').querySelectorAll('li').forEach((x,i)=>{
            x.setAttribute('class','red');
            x.id = `original${i}`
            console.log(x.children.length)
            if(x.children.length>0)console.log(Array.from(x.children).filter(item=>item.tagName == 'UL'))
            if(x.innerHTML.split('<ul>').length>1)console.log(x.innerHTML.split('<ul>')[1].split('</ul>')[0])
            let listItem =  patcher.appendChild(document.createElement('button'));
            listItem.innerHTML = x.innerHTML;
            console.log(Vessels.parseObject(x.innerHTML));
            listItem.id = `item${i}`
        })
        document.getElementById('object').innerHTML += Vessels.parseObject('#osc.Oscillator frequency:100 type:sawtooth').toString();
    }