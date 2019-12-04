function Nutrient() {
    Snake.call(this);
    this.x = null;
    this.y = null;
    this.dom = null;

    this.init = function(maxX, maxY, wrapperDom) {
        this.count(maxX, maxY);
        this.dom = wrapperDom.children().eq(this.x).children().eq(this.y);
        this.dom.removeClass('td').addClass('td2');
    }

    this.count = function(maxX, maxY) {
        this.x = Math.floor(Math.random() * maxX);
        this.y = Math.floor(Math.random() * maxY);
        for (var i = 0; i < this.data.length; i++) {
            if (this.x == this.data[i][0] && this.y == this.data[i][1]) {
                this.count(maxX, maxY);
            }
        }
    }

    this.clear = function() {
        this.dom.removeClass('td2');
    }
}
