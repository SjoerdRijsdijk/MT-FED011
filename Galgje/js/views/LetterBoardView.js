site.views.LetterBoardView = Backbone.View.extend({

    initialize : function(){
        this.render();
    },

    render : function(){
        this.collection.each(function(value){
            console.log(value);
            var letterView = new site.views.LetterView({model : value});
            console.log(letterView);
            this.$el.append(letterView.render().el);

        }, this);
        return this;
    }
});