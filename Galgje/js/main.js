(function(){
    site.init = function(){
        var alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var letterModels = [];  //Komen de letters in

        $.each(alfabet, function(index, value){
            var letterModel = {
                letter : value,
                enabled : true
            };
            letterModels.push(letterModel);
        });

        new site.views.WordBoxView({el:"#wordBox"});

        var hangmanModel = new site.models.Hangman();

        new site.views.HangmanView({el: "#hangmanCanvas", model: hangmanModel});

        var letters = new site.collections.Letters(letterModels);
        new site.views.LetterBoardView({el: "#letterBox", collection: letters});

    };

    site.$document.on('ready', site.init);
})();