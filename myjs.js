$(document).ready(function(){
    console.log('ready');
    
    var userexp = /^[a-zA-Z0-9]{8,15}$/; //regular expression (^ means starts with, $ means ends in, {3} means copy)
    
    var imageexp = /(jpg|png|gif){1,500}$/; //(| means or, ? means optional)
    
    var movieexp = /^[a-zA-Z\ ]{1,50}$/; //(\-_\.) used for symbols
    
    var commentexp = /[a-zA-Z0-9\ \!\,\.\?]{1,100}$/;
    
    var userinp = document.getElementById('input_user');
    var imageinp = document.getElementById('input_image');
    var movieinp = document.getElementById('input_movie');
    var commentinp = document.getElementById('input_comment');
    
    var submitBut = document.getElementById('submit_but');
    var displaydiv = document.getElementById('display');
    
    
    userinp.onkeyup = function(){
        console.log(userexp.test(userinp.value), userinp.value);
        if(userexp.test(userinp.value) == true){
        //change the color style of the input that coresponds to being correct
            userinp.style.color = "lightgreen";
        } else {
        //change the color style of the input that corresponds to being inncorrect
            userinp.style.color = "red";
        }
    }
    
    imageinp.onkeyup = function(){
        console.log(imageexp.test(imageinp.value), imageinp.value);
        if(imageexp.test(imageinp.value) == true){
        //change the color style of the input that coresponds to being correct
            imageinp.style.color = "lightgreen";
        } else {
        //change the color style of the input that corresponds to being inncorrect
            imageinp.style.color = "red";
        }
    }
    
    movieinp.onkeyup = function(){
        console.log(movieexp.test(movieinp.value), movieinp.value);
        if(movieexp.test(movieinp.value) == true){
        //change the color style of the input that coresponds to being correct
            movieinp.style.color = "lightgreen";
        } else {
        //change the color style of the input that corresponds to being inncorrect
            movieinp.style.color = "red";
        }
    }
    
    commentinp.onkeyup = function(){
        console.log(commentexp.test(commentinp.value), commentinp.value);
        if((commentexp.test(userinp.value) == true) &&
            (movieexp.test(movieinp.value) == true) &&
            (imageexp.test(imageinp.value) == true) &&
           (userexp.test(userinp.value) == true)){
        //change the color style of the input that coresponds to being correct
            commentinp.style.color = "lightgreen";
            
            submitBut.style.display = "inline";
        } else {
        //change the color style of the input that corresponds to being inncorrect
            commentinp.style.color = "red";
        }
    }
        
    
    submitBut.onclick = function(){
        var newDiv = document.createElement('div');
        displaydiv.appendChild(newDiv);
        newDiv.className = 'newdiv';
        
        var newImgDiv = document.createElement('div');
        newDiv.appendChild(newImgDiv);
        newImgDiv.className = 'newimgdiv';
        var newIMAGE = document.createElement('img');
        newIMAGE.className = "newimage";
        newIMAGE.src = imageinp.value
        newImgDiv.appendChild(newIMAGE);
        
        
        var newUserDiv = document.createElement('div');
        newDiv.appendChild(newUserDiv);
        newUserDiv.className = 'newuserdiv';
        newUserDiv.innerHTML = userinp.value;
        
        var newCommentDiv = document.createElement('div');
        newDiv.appendChild(newCommentDiv);
        newCommentDiv.className = 'newcommentdiv';
        var newComment = document.createElement('p');
        newComment.className = "newcomment";
        newComment.innerHTML = commentinp.value;
        newCommentDiv.appendChild(newComment);
        
        var newMovieDiv = document.createElement('div');
        newDiv.appendChild(newMovieDiv);
        newMovieDiv.className = 'newmoviediv';

        var newMovie = document.createElement("img");
        newMovie.className = "newmovie";
        newMovieDiv.appendChild(newMovie);
        
        $.ajax({
            url:'http://www.omdbapi.com/?t='+movieinp.value,
            dataType:'jsonp',
            success:function(resp){
                newMovie.src = resp.Poster;
            }
        })
    }
})