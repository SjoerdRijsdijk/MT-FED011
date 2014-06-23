site.views.LetterView = Backbone.View.extend({
    tagName : "div",
    className : "letter",



    template : _.template($("#letterTemplate").html()),

    render : function(){
        console.log("Letter is aangemaakt!");
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events : {
        'click .letter' : 'colorChanger'
    },

    colorChanger : function(e){
//        e.preventDefault();
//        var currentTarget = e.target();
//        $(currentTarget).toggleClass("red");
        console.log("Je hebt op mij geklikt!");
    }
});