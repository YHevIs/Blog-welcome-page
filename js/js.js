function Game() {
    this.row = 12;
    this.col = 12;
    this.data = [];
    this.dom = $('.wrapper').children('tbody');
    this.snake = new Snake();
    this.keyDir = 4;
    this.timeInterval = null;
    this.tss = 0.1;
    this.ts = 0;

    this.nutrient = null;

    this.init = function() {
        for (var i = 0; i < this.row; i++) {
            var row = $('<tr></tr>');
            this.data[i] = [];
            for (var j = 0; j < this.col; j++) {
                var td = $('<td></td>');
                this.data[i][j] = 0;
                row.append(td);
            }
            this.dom.append(row);
        }
        this.setEvent();
        this.start();
    }

    this.start = function() {
        var _self = this;
        this.timeInterval = window.setInterval(function() {
            /* 移动更新 */
            _self.ts += 66;
            if (_self.ts > _self.tss * 1000) {
                var bool = _self.snake.climb(_self.keyDir, _self.nutrient.x, _self.nutrient.y);
                if (bool) {
                    _self.nutrient.clear();
                    _self.nutrient = new Nutrient();
                    _self.nutrient.init(_self.row, _self.col, _self.dom);
                }
                _self.ts = 0;
                if (!_self.snake.collisionDetection(_self.row, _self.col)) {
                    _self.gameOver();
                }
            }

            /* 渲染 */
            _self.clearData();
            for (var i = 0; i < _self.snake.data.length; i++) {
                var x = _self.snake.data[i][0];
                var y = _self.snake.data[i][1];
                _self.data[x][y] = 1;
            }
            _self.updateDom();
        }, 66);

        this.nutrient = new Nutrient();
        this.nutrient.init(this.row, this.col, this.dom);
    }

    this.updateDom = function() {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                switch (this.data[i][j]) {
                    case 0:
                        this.dom.children().eq(i).children().eq(j).removeClass('td1').addClass('td0');
                        break;
                    case 1:
                        this.dom.children().eq(i).children().eq(j).removeClass('td0').addClass('td1');
                        break;
                }
            }
        }
    }




    this.clearData = function() {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    this.setEvent = function() {
        var _self = this;
        $(document).keydown(function(e) {
            var keyDir = null;
            switch (e.keyCode) {
                case 37:
                    // 左
                    keyDir = 1;
                    break;
                case 38:
                    //上
                    keyDir = 2;
                    break;
                case 39:
                    //右
                    keyDir = 4;
                    break;
                case 40:
                    //下
                    keyDir = 3;
                    break;
            }
            if (keyDir + _self.snake.direction != 5) {
                _self.keyDir = keyDir;
            }
        })
    }

    this.gameOver = function() { //游戏结束后弹窗并重置蛇的长度和位置
        alert("Game Over!");
        this.snake = new Snake();
        this.dom.html('');
        this.ts = 0;
        this.keyDir = 4;
        window.clearInterval(this.timeInterval);
        // this.init()
    }
}

$(function() {
    $('.snakeBtn').click(() => {
        window.game = new Game();
        game.init();
    })

})
