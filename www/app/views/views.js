window.addEventListener('load', function() {

    /* Declarando Views */
    $JSView.declareView({

        home: {
            url: '/home',
            template: 'app/views/home.html',
            controller: 'home'
        },

        locais: {
            url: '/locais',
            template: 'app/views/locais.html',
            controller: 'locais'
        },

        fretes: {
            url: '/fretes',
            template: 'app/views/fretes.html',
            controller: 'fretes'
        },

        single: {
            url: '/single',
            template: 'app/views/single.html',
            controller: 'single'
        },



    });


    $JSView
        .initView('home'); 


}, false);
