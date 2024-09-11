/**
 * @module objects
 * @description This module contains objects to be used in the patcher.
 */

const Late = {
    NumberFloat:NumberFloat,
    NumberRandom:NumberRandom,
    NumberInteger:NumberInteger,
    NumberAdd:NumberAdd,
    NumberSubtract:NumberSubtract,
    NumberMultiply:NumberMultiply,
    NumberDivide:NumberDivide,
    NumberModulo:NumberModulo,
    NumberBangSubtract:NumberBangSubtract,
    NumberGreater:NumberGreater,
    NumberLesser:NumberLesser,
    NumberGreaterEqual:NumberGreaterEqual,
    NumberLesserEqual:NumberLesserEqual,
    NumberNotEqual:NumberNotEqual,
    NumberSin:NumberSin,
    NumberCos:NumberCos,
    NumberTan:NumberTan,
    NumberAtan:NumberAtan,
    NumberAbs:NumberAbs,
    NumberLog:NumberLog,
    NumberExp:NumberExp,
    NumberPow:NumberPow,
    NumberAnd:NumberAnd,
    NumberOr:NumberOr,
    NumberSqrt:NumberSqrt,
    NumberChange:NumberChange,
    NumberGate:NumberGate,
    NumberBang:NumberBang,
    NumberSelect:NumberSelect,
    NumberMtof:NumberMtof,
    NumberFtom:NumberFtom,
    NumberClip:NumberClip
}

//------------------------------------------------

class NumberFloat{
    constructor(modifier=0){
        this.targets = [];
        this.value = 0;
        this.modifier = modifier;
        this.trigger = function(){
            this.update();
        }
        if(window.verbose) console.log(this.modifier)
    }
    connect(target, inlet=0){
        if(window.verbose) console.log(this.targets, '🟠 connecting to ', [target, inlet])
        if(window.verbose) console.log(this.targets.includes([target,inlet]))
        const even = (element) => element[0] == target && element[1] == inlet;
        if(!(this.targets.some(even)))this.targets.push([target, inlet])
    }
    set(msg){
        this.value = msg
    }
    update(msg = false){     
        this.value = (msg) || this.value;
        this.bang();
    }
    bang(){
        if(this.targets.length==0)return;
        this.targets.forEach(([target,inlet])=>{
            if('units' in target){
                target.value = this.value;
                return true;
            }
            target.inlet(inlet, this.value)
        })
    }
    inlet(index, msg){
        switch(index){
            case 0:
                switch(typeof msg){
                    case 'boolean':
                        return false;
                        break;
                    case 'number':
                        this.update(parseFloat(msg));
                        break;
                    case 'object':
                        this.set(msg[1]);
                        this.update(msg[0]);
                        break;
                }
                break;
            case 1:
                this.modifier = parseFloat(msg);
                if (this.value != parseFloat(this.modifier)) this.value = parseFloat(this.modifier);
                break;
        }
    }
}

//------------------------------------------------

class NumberRandom extends NumberFloat{
    update(msg = false){        
        this.value = Math.random() * this.modifier;
        if(window.verbose) console.log(this.value);
        this.bang();
    }
}

//------------------------------------------------

class NumberInteger extends NumberFloat{
    update(msg = false){        
        this.value = (Math.floor(msg)) || this.value;
        this.bang();
    }
    set(msg){
        this.value = Math.floor(msg)
    }
    inlet(index, msg){
        switch(index){
            case 0:
                switch(typeof msg){
                    case 'boolean':
                        return false;
                        break;
                    case 'number':
                        this.update(parseFloat(msg));
                        break;
                    case 'object':
                        this.set(msg[1]);
                        this.update(msg[0]);
                        break;
                }
                break;
            case 1:
                this.modifier = Math.floor(parseFloat(msg));
                if (this.value != parseFloat(this.modifier)) this.value = parseFloat(this.modifier);
                break;
        }
    }
}

//------------------------------------------------

class NumberAdd extends NumberFloat{
    update(msg = false){        
        this.value = msg + this.modifier || this.value;
        this.bang();
    }
}

class NumberSubtract extends NumberFloat{
    update(msg = false){        
        this.value = msg - this.modifier || this.value;
        this.bang();
    }
}

class NumberMultiply extends NumberFloat{
    update(msg = false){        
        this.value = msg * this.modifier || this.value;
        this.bang();
    }
}

class NumberDivide extends NumberFloat{
    update(msg = false){        
        this.value = msg / this.modifier || this.value;
        this.bang();
    }
}

class NumberModulo extends NumberFloat{
    update(msg = false){        
        this.value = msg % this.modifier || this.value;
        this.bang();
    }
}

class NumberBangSubtract extends NumberFloat{
    update(msg = false){        
        this.value =  this.modifier - msg || this.value;
        this.bang();
    }
}

class NumberGreater extends NumberFloat{
    update(msg = false){        
        this.value = msg > this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberLesser extends NumberFloat{
    update(msg = false){        
        this.value = msg < this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberGreaterEqual extends NumberFloat{
    update(msg = false){        
        this.value = msg >= this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberLesserEqual extends NumberFloat{
    update(msg = false){        
        this.value = msg <= this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberEqual extends NumberFloat{
    update(msg = false){        
        this.value = msg == this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberNotEqual extends NumberFloat{
    update(msg = false){        
        this.value = msg != this.modifier ? 0 : 1 || this.value;
        this.bang();
    }
}

class NumberSin extends NumberFloat{
    update(msg = false){        
        this.value = Math.sin(msg) || this.value;
        this.bang();
    }
}

class NumberCos extends NumberFloat{
    update(msg = false){        
        this.value = Math.cos(msg) || this.value;
        this.bang();
    }
}

class NumberTan extends NumberFloat{
    update(msg = false){        
        this.value = Math.tan(msg) || this.value;
        this.bang();
    }
}

class NumberAtan extends NumberFloat{
    update(msg = false){        
        this.value = Math.atan(msg) || this.value;
        this.bang();
    }
}

class NumberAbs extends NumberFloat{
    update(msg = false){        
        this.value = Math.abs(msg) || this.value;
        this.bang();
    }
}

class NumberLog extends NumberFloat{
    update(msg = false){        
        this.value = Math.log(msg) || this.value;
        this.bang();
    }
}

class NumberExp extends NumberFloat{
    update(msg = false){        
        this.value = Math.exp(msg) || this.value;
        this.bang();
    }
}

class NumberPow extends NumberFloat{
    update(msg = false){        
        this.value = Math.pow(msg, this.modifier) || this.value;
        this.bang();
    }
}

class NumberAnd extends NumberFloat{
    update(msg = false){        
        this.value = msg != 0 && this.modifier !=0 || this.value;
        this.bang();
    }
}

class NumberOr extends NumberFloat{
    update(msg = false){        
        this.value = msg != 0 || this.modifier !=0 || this.value;
        this.bang();
    }
}

class NumberSqrt extends NumberFloat{
    update(msg = false){        
        this.value = Math.sqrt(msg) || this.value;
        this.bang();
    }
}

class NumberChange extends NumberFloat{
    update(msg = false){        
        if(msg != this.value){
            this.value = msg
            this.bang();            
        }
    }
}

class NumberGate extends NumberFloat{
    update(msg = false){        
        if(this.modifier > 0){
            this.value = msg || this.value;
            this.bang();            
        }
    }
}

class NumberBang extends NumberFloat{
    update(msg = false){        
        this.bang();            
    }
    bang(){
        if(this.targets.length==0)return;
        this.targets.forEach(([target,inlet])=>target.bang())
    }
}

class NumberSelect extends NumberFloat{
    update(msg = false){
        if(msg == this.modifier)this.bang();
    }
    bang(){
        if(this.targets.length==0)return;
        this.targets.forEach(([target,inlet])=>target.bang())
    }
}

class NumberMtof extends NumberFloat{
    update(msg = false){        
        this.value = Math.pow(2,(msg-69)/12)*440 || this.value;
        this.bang();
    }
}

class NumberFtom extends NumberFloat{
    update(msg = false){        
        this.value = Math.log(msg/440.0)/Math.log(2) * 12 + 69 || this.value;
        this.bang();
    }
}


//------------------------------------------------

class NumberClip extends NumberFloat{
    constructor(min=0,max=1){
        super()
        this.targets = [];
        this.value = 0;
        this.min = min;
        this.max = max;
    }
    connect(target, inlet){
        if(!(this.targets.includes([target, inlet])))this.targets.push([target, inlet])
    }
    update(msg = false){
        this.value = (msg < this.min ? this.min : msg > this.max ? this.max : msg) || this.value;
        this.bang();
    }
    
    inlet(index, msg){
        switch(index){
            case 0:
                switch(typeof msg){
                    case 'boolean':
                        return false;
                        break;
                    case 'number':
                        this.update(msg);
                        break;
                    case 'object':
                        this.min = msg[1]
                        this.max = msg[2] || this.max;
                        this.update(msg[0]);
                        break;
                }
                this.update(msg);
                break;
            case 1:
                this.min = msg;
                break;
            case 2:
                this.max = msg;
                break;
        }
    }    
}

//------------------------------------------------

