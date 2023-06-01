class SVG{
    constructor(){
        this.text = "";
        this.shape = "";
    }
    setText(text, textColor){
        if (text.length >3){
            throw new Error("Text exceeds limit of 3 characters")
        } else{
        return this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        }
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`; 
    }
    setShape(shape){
    return this.shape = shape.render();
    }    
}
module.exports = SVG;