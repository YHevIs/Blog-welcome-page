function Snake(){
    /**
     * 1 = 左
     * 2 = 上
     * 4 = 右
     * 3 = 下
     **/
    this.direction = 4;

    this.data = [
        [0,0],
        [0,1],
        [0,2],
        [0,3],
        [0,4],
        [0,5]
    ];
    
    this.climb = function (dir,nX,nY) {
        /**
         * 1. 不能反向爬
         **/
        this.direction = dir;

        var bool = false;

        var lastArr = this.data[this.data.length-1].slice(0);
        // [0,5]
        // arr =  1 2 3
        // 取这个数组的2 
        // arr[1]
        switch (this.direction){
            case 1 :
                //左
                lastArr[1] -= 1;
            break;
            case 2:
                //上
                lastArr[0] -= 1;
            break;
            case 3:
                //下
                lastArr[0] += 1;
            break;
            case 4:
                //右
                lastArr[1] += 1;
            break;
        }

        if(lastArr[0] != nX || lastArr[1] != nY){
            this.data.shift();
        }else{
            bool = true;
        }

        this.data.push(lastArr);
        return bool;
    }

    this.collisionDetection = function (row,col) {//碰撞检测
        var first = this.data[this.data.length-1];
        if(first[0]>=0&&first[0]<row&&first[1]>=0&&first[1]<col){
            for(var i=0; i<this.data.length-1; i++){ //数组长度-1 否则头重叠
                if(first[0]==this.data[i][0]&&first[1]==this.data[i][1]){
                    return false;
                }
            }
        }else{
            return false;
        }
        return true;
    }
}
