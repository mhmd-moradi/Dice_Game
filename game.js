window.onload=function(){

    const number_1 = get_random();
    const number_2 = get_random();

    const img1 = document.getElementsByClassName("img1")[0];
    const img2 = document.getElementsByClassName("img2")[0];
    
    // get random function -- random integer between 1 and 6 --
    function get_random(){
        var random = Math.floor(Math.random() * 6) + 1;
        return random;
    }

    //update images function
    function update_images(){
        img1.src = "images/dice"+number_1+".png";
        img2.src = "images/dice"+number_2+".png";
    }

}