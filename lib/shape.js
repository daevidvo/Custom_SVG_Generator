class Shape { //the parent shape constructor that we'll use to make the other shape classes
    constructor(text, text_color, shape_color){
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
}

module.exports = Shape