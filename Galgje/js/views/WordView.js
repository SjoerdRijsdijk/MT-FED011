site.views.WordView = Backbone.View.extend({
    tagName : "div",
    className : "shownWord",

    initialize : function(){
        site.events.on("sendClickedLetter", this.letterExists, this);
    },

    render : function(){
        this.$el.html(this.model.get("shownWord"));
        return this;
    },

    letterExists : function(letter){
        //Kijk of de letter voorkomt in het te raden woord
        var guessWord = this.model.get("guessWord");
        var noMatch = true;

        for(var i = 0; i < guessWord.length; i++){
            if(guessWord[i] === letter){
                //Letter komt in het woord voor
                noMatch = false;
                this.showLetter(i, letter);
            }else if(i == guessWord.length - 1 && noMatch)
                    //Letter komt niet in het woord voor
                    site.events.trigger("increaseState");
        }
        this.render();
        this.isComplete();
    },

    showLetter : function(index, letter){
        //Vervang een 'punt' met de gewenste letter
        var updatedShownWord = this.model.get("shownWord").substr(0, index) + letter + this.model.get("shownWord").substr(index+letter.length);
        this.model.set("shownWord", updatedShownWord);
    },

    isComplete : function(){
        if(this.model.get("guessWord") == this.model.get("shownWord")){
            alert("Gefeliciteerd, u heeft het woord geraden!");
            location.reload();
        }
    }

});