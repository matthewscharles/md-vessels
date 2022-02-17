// let testInput = '#filter1 cutoff : 100hz, resonance:1'
let testInput = '#afilter1 .Filter, cutoff : 100hz, resonance:1'
// testInput = '#filter1.Filter, cutoff : 100hz, resonance:1'



const Vessels = {
    matchMark(str, mark, other){
        let matcher = str.find(x=>x.includes(mark))
        if(typeof matcher != 'undefined'){
            if(matcher.includes(mark)) {
                matcher=matcher.replace(mark, ` ${mark}`);
                matcher=matcher.replace(other, ` ${other}`);
                let spaced = matcher.split(' ');
                return spaced.filter(x=>x.includes(mark))[0].replace(mark,'')
            } else {
                return str.split(mark)[1];
            }
        } else {
            // console.log('gave up')
            return '';
        }
    },
    parseObject(input){
        // parse class (.) and id (#)
        let outputArray = input.split(" ");
        let output = {};
        //remove commas at end of entries
        //(we might need to fence some user generated lists off with square brackets later)
        outputArray.forEach((x,i) => {
            // console.log('last char: ',x[x.length-1])
            // console.log('last',x.slice(0,-1))
            if(x[x.length-1]==',')outputArray[i]=x.slice(0,-1);
            
        })

       output.class = this.matchMark(outputArray,'.','#')
       output.id = this.matchMark(outputArray,'#','.')
        
        //quick and dirty rules to clean up 
        outputArray.forEach((x,i) => {
            if(x==':'){
                outputArray[i] = `${outputArray[i-1]}:${outputArray[i+1]}`;
                outputArray[i-1]='';
                outputArray[i+1]='';
            };
          
        })
        outputArray = outputArray.filter(x=>x!=`#${output.id}` && x != `.${output.class}`);
        outputArray = outputArray.filter(x=>x.length>1);
        output.attributes = {}
        // outputArray.forEach(x=>console.log('includes :',x.includes(':')));
        // for now, let's assume inclusion of : since we covered it in the cleanup
        outputArray = outputArray.filter(x=>x.includes(':'));
        outputArray.forEach(x=>{
            let [index,value] = x.split(':');
            output.attributes[index] = value;
        })
        return output;
    }
}

console.log(Vessels.parseObject(testInput))