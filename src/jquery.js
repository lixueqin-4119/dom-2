window.jQuery=function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements=document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements=selectorOrArray
    }
 
 return{
     addClass(className){
         for(let i=0;i<elements.length;i++){
             const element=elements[i]
             element.classList.add(className)
         }
         return this
     },
     find(selector){
       let array=[]
       for(let i=0;i<elements.length;i++){//用element代替document查找范围
        const elements2=Array.from(elements[i].querySelectorAll(selector))
        array=array.concat(elements2)
       //array=array+elements2
}
const newApi=jQuery(array)
return newApi
     },




 }
}