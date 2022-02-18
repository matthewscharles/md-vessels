 var output = {};

    function getPatch(element, start='.beginPatch', end='.endPatch'){
        return element.substring(element.indexOf(start) + start.length,element.indexOf(end));
    }

    function run(){
        document.getElementById('source').innerHTML = getPatch(document.body.innerHTML);
        document.getElementById('patcher').innerHTML = '';
        document.getElementById('source').querySelectorAll('li').forEach((x,i)=>{
            x.setAttribute('class','red');
            x.id = `original${i}`
            console.log(x.children.length)
            // check length of children and apply a separate process, remove from loop

            // if(x.children.length>0)console.log(Array.from(x.children).filter(item=>item.tagName == 'UL'))
            // if(x.innerHTML.split('<ul>').length>1)console.log(x.innerHTML.split('<ul>')[1].split('</ul>')[0])

            let listItem =  patcher.appendChild(document.createElement('code'));
            let newObject = Vessels.parseObject(x.innerHTML);
            // console.log(newObject.id)
            listItem.innerHTML = JSON.stringify(newObject);
            listItem.id = `item${i}`
            output[newObject.id] = newObject;
        })
        document.getElementById('object').innerHTML += JSON.stringify(output);
    }