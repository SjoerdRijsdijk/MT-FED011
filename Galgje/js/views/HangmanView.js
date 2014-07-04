site.views.HangmanView = Backbone.View.extend({
    initialize : function(){
        site.events.on("increaseState", this.increaseState, this);
        this.model.on("change:state", this.render, this);
        this.model.on("change:state", this.isGameOver, this);
        this.render();
    },

    render : function(){
        //Voor het leegmaken van de canvas
        this.el.width = this.el.width;

        var c = this.el.getContext("2d");
        var x = this.el.width / 4;

        c.lineWidth = 3;
        this.drawLine(c, [x ,145], [180,145]);

        var state = this.model.get("state");

        if(state > 0){
            //Tekenen van staande balk
            this.drawLine(c, [x + 10, 145], [x + 10, 10]);
            if (state > 1){
                //Tekenen van bovenste balk
                c.lineTo(150,10);
                c.stroke();
            }
            if (state > 2){
                //Tekenen van hoofd
                c.strokeStyle = "red";
                c.lineWidth = 2;
                this.drawLine(c, [145,12], [145,30]);
                c.beginPath();
//                c.moveTo(160, 45);
                c.arc(145, 40, 10, 0, (Math.PI/180)*360);
                c.stroke();
            }
            if (state > 3){
                //Tekenen van middenlichaam
                this.drawLine(c, [145,50], [145,90]);
            }
            if (state > 4){
                //Tekenen van linker arm
                this.drawLine(c, [145,65], [120,40]);
            }
            if (state > 5){
                //Tekenen van rechter arm
                this.drawLine(c, [145,65], [170,40]);
            }
            if (state > 6){
                //Tekenen van linker been
                this.drawLine(c, [145,90], [130,115]);
            }
            if (state > 7){
                //Tekenen van rechter been
                this.drawLine(c, [145,90], [160,115]);
            }
        }
    },

    increaseState : function(){
        this.model.set("state", this.model.get("state") + 1);

    },

    drawLine : function(context, from, to) {
        context.beginPath();
        context.moveTo(from[0], from[1]);
        context.lineTo(to[0], to[1]);
        context.stroke();
    },

    isGameOver : function(model, value){
       if(model.get("maxState") == value){
           alert("Game Over!");
           location.reload();
       }
    }



});