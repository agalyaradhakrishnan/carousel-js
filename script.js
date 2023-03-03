var carousel=document.querySelector('img');
var images=["img/main-01.jpg","img/main-02.jpg","img/main-03.jpg","img/main-05.jpg","img/main-06.jpg","img/main-07.jpg","img/main-08.jpg"];
var num=1;
function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
    }
                    
};
function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};