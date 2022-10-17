/*eslint-env browser*/

//STEP 1
    window.console.log("RESULT: Step1");
    var movie=["movie1","movie2","movie3","movie4","movie5"];
    window.console.log(movie[1]);               ///1 is the index for movie2
    window.console.log("");

//STEP 2
    window.console.log("RESULT: Step2");
    var movie = new Array(5);
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    window.console.log(movie[0]);
    window.console.log("");

//STEP 3
    window.console.log("RESULT: Step3");
    var movie = new Array(5);
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie.splice(2, 0, 'movie6')
    console.log(movie.length);
    window.console.log(movie);
    window.console.log("");

//STEP 4
    window.console.log("RESULT: Step4");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    delete movie[0];
    window.console.log(movie);
    window.console.log("");

//STEP 5
    window.console.log("RESULT: Step5");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var i;
    for( i = 0 ; i < movie.length ; i += 1){
        window.console.log(movie[i]);   
    }
    window.console.log("");

//STEP 6
    window.console.log("RESULT: Step6");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var index;
    for( index in movie ){
        window.console.log(movie[index]);   
    }
    window.console.log("");

//STEP 7
    window.console.log("RESULT: Step7");
    var movie = [];
    movie[0]= "bMovie1";
    movie[1]= "aMovie2";
    movie[2]= "eMovie3";
    movie[3]= "fMovie4";
    movie[4]= "dMovie5";
    movie[5]= "cMovie6";
    movie[6]= "kMovie7";

    var index;
    for( index in movie.sort() ){
        window.console.log(movie[index]);
    }
    window.console.log("");

//STEP 8
    window.console.log("RESULT: Step8");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }
    window.console.log("");

//STEP 9
    window.console.log("RESULT: Step9");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }

    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);
    window.console.log("");

//STEP 10
    window.console.log("RESULT: Step10");
    var movie = [];
    movie[0]= "movie1";
    movie[1]= "movie2";
    movie[2]= "movie3";
    movie[3]= "movie4";
    movie[4]= "movie5";
    movie[5]= "movie6";
    movie[6]= "movie7";

    var leastFavMovie = ["movie2", "movie4", "movie1"];
    var i;
    window.console.log("");
    window.console.log("Movies I like:");
    window.console.log("");

    for( i = 0 ; i < movie.length ; i += 1){   
        window.console.log(movie[i]);
    }
    window.console.log("");
    window.console.log("");
    window.console.log("Movies I regret watching:");
    window.console.log("");

    for( i = 0 ; i < leastFavMovie.length ; i += 1){
        window.console.log(leastFavMovie[i]);   
    }
    window.console.log("");

    var movies = ((movie.concat(leastFavMovie)).sort()).reverse();
    window.console.log(movies);

    window.console.log(movies.slice(-1));
    window.console.log("");