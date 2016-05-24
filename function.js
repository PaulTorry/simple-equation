module.exports = {

  Text: function (text){
      this.x = 0; this.y = 0;

       this.width = function(){ return text.length; }

       this.height = function(){ return 1; }

       this.setPos = function(x,y){
          this.x =  x;
          this.y =  y;
       }

      this.draw = function(){
        return '<text fill="black" x="' + this.x + '" y="' + this.y +'">' + text + '</text>'
      }

       return this;
   },


  Equals: function (left, op, right){
      this.opwidth = 1; this.opheight = 1;
      this.x = 0; this.y = 0;

       this.width = function(){
         return this.opwidth + left.width() + right.width();
       }

       this.height = function(){
         return Math.max(left.height(), right.height(), this.opheight)
       }

       this.setPos = function(x,y){
          this.x = left.width() + x;
          this.y = (Math.max(left.height(), right.height())-1)/2 + y

          left.setPos(x, this.y + (left.height()-this.height())/2)
          right.setPos(this.x + this.opwidth, this.y + (right.height()-this.height())/2)
       }

       this.draw = function(){
          return left.draw() + '\n' + '<text fill="black" x="' + this.x + '" y="' + this.y +'">' + op + '</text>' + '\n' + right.draw()
       }

       return this;
   },

   Divide: function(left, op, right){
     this.opwidth = 1; this.opheight = 1;
      this.x = 0; this.y = 0;

      this.width = function(){
        return Math.max(left.width(), right.width(), this.opwidth )
      }

      this.height = function(){
        return this.opheight + left.height() + right.height();
      }

     this.setPos = function(x,y){
       this.x = x;
       this.y = left.height() + y

        left.setPos((this.width()-left.width())/2 + x, y)
        right.setPos((this.width()-left.width())/2 + x, this.opheight + this.y)
     }

     this.draw = function(){
        return left.draw() + '\n' + '<text fill="black" x="' + this.x + '" y="' + this.y +'">' + op + '</text>' + '\n' + right.draw()
     }

   }




}
