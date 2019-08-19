let rootBody = document.getElementsByTagName("body")[0];

const orginaljsonTab = [
    {
        cover: {
            large: "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/9780596517748/cat.gif"
        },
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        releaseDate: "12/2008",
        pages: 172,
        link: "http://shop.oreilly.com/product/9780596517748.do"
    },
    {
        cover: {
            large: "https://covers.oreillystatic.com/images/9780596000486/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/9780596000486/cat.gif"
        },
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        releaseDate: "11/2001",
        pages: 936,
        link: "http://shop.oreilly.com/product/9780596000486.do"
    },
    {
        cover: {
            large: "https://covers.oreillystatic.com/images/0636920025832/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/0636920025832/cat.gif"
        },
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        releaseDate: "08/2012",
        pages: 254,
        link: "http://shop.oreilly.com/product/0636920025832.do"
    },
    {
        cover: {
            large: "https://covers.oreillystatic.com/images/0636920027713/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/0636920027713/cat.gif"
        },
        title: "JavaScript Enlightenment",
        author: "Cody Lindley",
        releaseDate: "12/2012",
        pages: 166,
        link: "http://shop.oreilly.com/product/0636920027713.do"
    },
    {
        cover: {
            large: "https://covers.oreillystatic.com/images/0636920033141/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/0636920033141/cat.gif"
        },
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        releaseDate: "07/2014",
        pages: 254,
        link: "http://shop.oreilly.com/product/0636920033141.do"
        },
        {
        cover: {
            large: "https://covers.oreillystatic.com/images/0636920047124/lrg.jpg",
            small: "https://covers.oreillystatic.com/images/0636920047124/cat.gif"
        },
        title: "Practical Modern JavaScript",
        author: "Nicolas Bevacqua",
        releaseDate: "07/2017",
        pages: 334,
        link: "http://shop.oreilly.com/product/0636920047124.do"
  }
];

let jsonTab = orginaljsonTab.slice(0);

//=====================Generator=========================//

function bookGenerator(jsonTab){ 
    jsonTab.forEach(function(element,index){
        let sectionTag = document.createElement("section");
        let divNumber = document.createElement("div");
        let classBolder = document.createElement("p");
        let span = document.createElement("span");
        let divPic = document.createElement("div");
        let imgLarge = document.createElement("img");
        let divTitle = document.createElement("div");
        let name = document.createElement("h3");
        let hr = document.createElement("hr");
        let h4 = document.createElement("h4");
        let i = document.createElement("i");
        let p = document.createElement("p");
        let i2 = document.createElement("i");
        let author = document.createElement("span");
        let year = document.createElement("p");
        let pages = document.createElement("p");
        let linkSpan = document.createElement("span");
        let a = document.createElement("a");
        let img = createElementImg(index, imgLarge);
        
        sectionTag.appendChild(divNumber);
        sectionTag.appendChild(divPic);
        sectionTag.appendChild(divTitle);
        
        img.src = element.cover.small;
        imgLarge.src = element.cover.large;  
        name.innerHTML = element.title;
        author.innerHTML = element.author;
        year.innerHTML = element.releaseDate;
        pages.innerHTML = element.pages;
        a.href = element.link;

        rootBody.appendChild(sectionTag).style.display = "";

        //========class="numbers"===========//

        divNumber.className = "numbers";
        divNumber.appendChild(classBolder);
        classBolder.appendChild(span);
        span.className="bolder";
        span.innerHTML= ++index;

        //========class="pic"===========//

        divPic.className="pic";
        divPic.appendChild(img).style.cursor="pointer";

        //========class="title"===========//

        divTitle.className="title";
        divTitle.appendChild(name);
        hr.className="new";
        divTitle.appendChild(hr);
        author.className="lighter";
        i.appendChild(author).innerHTML="By "; 
        author.textContent += author.innerHTML = element.author;
        divTitle.appendChild(h4);
        h4.appendChild(i);
        divTitle.appendChild(p);
        p.appendChild(i2);

        i2.appendChild(year).innerHTML="Realise Date: "; 
        year.textContent += year.innerHTML = element.releaseDate;
        
        i2.appendChild(pages).innerHTML="Pages: "; 
        pages.textContent += pages.innerHTML = element.pages;

        i2.appendChild(linkSpan).innerHTML="Link: ";                
        a.innerHTML ="shop";
        linkSpan.appendChild(a);
        linkSpan.className="dashed";
    });
}

//====================functions js======================//
function hideSection(){
    let section2 = document.querySelectorAll("section");
    for(let i=0; i <section2.length; i++){  
        section2[i].style.display="none";                                 
    }  
}

//.1

function numberPages(){
    hideSection();
    sortNumberPages();   
}

function sortNumberPages(){
    jsonTab = jsonTab.sort(function(a,b){
        return a.pages - b.pages;    
    }); 
    bookGenerator(jsonTab); 
}

//.2

function releaseDate(){
    hideSection();
    sortReleaseDate();
}

function sortReleaseDate(){
  
    jsonTab = jsonTab.sort(function(a,b){
        let monthSort = a.releaseDate.substr(0, 2) - b.releaseDate.substr(0, 2);
        let yearSort = a.releaseDate.substr(3, 7) - b.releaseDate.substr(3, 7);

        return yearSort || monthSort;
    }); 
    bookGenerator(jsonTab); 
}

//.3

function authorSurname(){
    hideSection();
    sortAuthorSurname();               
}      

function sortAuthorSurname(){
    jsonTab = jsonTab.sort(function(a, b){

        let x = a.author.split(" ");
        let y = b.author.split(" ");

        let x2 = x[1];
        let y2 = y[1];

        if(x2 < y2) { 
            return -1;
        }
        if(x2 > y2) {
            return 1; 
        }
        return 0;
    });
    bookGenerator(jsonTab); 
}    
       
//4.

function randomBook(){
    hideSection();         
    sortRandomBook();               
}  

function sortRandomBook(){
    jsonTab = jsonTab.sort(function(){   
       return .5-Math.random();        
    });
    bookGenerator(jsonTab); 
}     

bookGenerator(jsonTab); 

function createElementImg(index, imgLarge){
    let defineFunctionForImg = "openModal();currentSlide(" + index +")";

    let img = document.createElement("img");
    img.setAttribute("onclick", defineFunctionForImg);
    img.onclick = function() {

        openModal(imgLarge, index);
      
    }
    return img;
}

function openModal(imgLarge, index){
    document.getElementById('popup-bgc').style.display="block";
    let inmod = document.getElementById('inmodal');
    inmod.appendChild(imgLarge);

    let arrows = document.getElementById("arrows");

    let hiddenElement = document.createElement("button");
    hiddenElement.setAttribute("id","hiddenElement");

    let prev = document.createElement("button");
    prev.setAttribute("id","prev");

    let next = document.createElement("button");
    next.setAttribute("id","next");

    let turnToFirst = document.createElement("button");
    turnToFirst.setAttribute("id","turnToFirst");

    hiddenElement.innerHTML="null";
    prev.innerHTML="<";
    next.innerHTML=">";
    turnToFirst.innerHTML="&#8634;";

    arrows.appendChild(hiddenElement);
    arrows.appendChild(prev);
    arrows.appendChild(next);
    arrows.appendChild(turnToFirst);

    if(jsonTab.length-1 == index){
        turnToFirst.style.display="";
    }
    else{
        turnToFirst.style.display="none";
    }

    if(jsonTab.length-6 == index){
        hiddenElement.style.display="";
    }
    else{
        hiddenElement.style.display="none";
    }

    if(jsonTab.length == index+6 ){
        prev.style.display = "none";
    }

    if(jsonTab.length-1 == index ){
        next.style.display = "none";
    }

    prev.onclick = function(){
        prevImgLink = jsonTab[--index].cover.large;
        removeChildren(inmod);
        let prevImgChild = document.createElement("img");
        inmod.appendChild(prevImgChild);
        prevImgChild.setAttribute("src",prevImgLink);
    
        if(jsonTab.length > index ){
            next.style.display = "";
        }

        if(jsonTab.length == index+6){
            prev.style.display = "none";
        }
        
        turnToFirst.style.display = "none";

        if(jsonTab.length-6 == index){
            hiddenElement.style.display = "";
        }
        else{
            hiddenElement.style.display = "none";
        }
   };

    next.onclick = function(){
        nextImgLink = jsonTab[++index].cover.large;
        removeChildren(inmod);
        let nextImgChild = document.createElement("img");
        inmod.appendChild(nextImgChild);
        nextImgChild.setAttribute("src",nextImgLink);
       
        if(jsonTab.length-1 == index){
             next.style.display = "none";
        }
        if(jsonTab.length > index ){
            prev.style.display = "";
        }
        if(jsonTab.length-1 == index){
            turnToFirst.style.display ="";
        }
        hiddenElement.style.display = "none";
    };

    turnToFirst.onclick = function(){
        firstImgLink = jsonTab[0].cover.large;
        removeChildren(inmod);
        let firstImgChild = document.createElement("img");
        inmod.appendChild(firstImgChild);
        firstImgChild.setAttribute("src",firstImgLink);

        turnToFirst.style.display = "none";
        index = 0;
        next.style.display = "";
        prev.style.display = "none";  
        hiddenElement.style.display = "";
    };
}

let buttonClose = document.getElementById('close');
buttonClose.onclick = function(){
    closeModal();
}

function closeModal(){     
    document.getElementById('popup-bgc').style.display="none";
    let inmod = document.getElementById('inmodal');
    let arrows = document.getElementById("arrows");

    removeChildren(inmod);
    removeChildren(arrows);
}

function removeChildren(mainNode){
    while(mainNode.firstChild){
        mainNode.removeChild(mainNode.firstChild);
    }
}
          
function isInputNumber(evt){
    let ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault(); 
    }
}

document.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        getAndSetVal();
    }
});
               
function getAndSetVal() { 
    let input = document.getElementById("fname").value;
    let section2 = document.querySelectorAll("section");
    getAndSetVal2(section2,input);     
}

function getAndSetVal2(section2,input) { 
    for(let i=0; i <section2.length; i++){
        let title = section2[i].getElementsByClassName("title");
        let p = title[0].getElementsByTagName("p");
        let text = p[2].innerText;
        let r = /[,.!?\s]+/;
        let word = text.split(r);
        let pages = word[1];          
        let pagesInt =  parseInt(pages);    
        let inputInt = parseInt(input);       

        let bodyNode = document.getElementsByTagName("body")[0];
        
        if(inputInt <= pagesInt ){    
            section2[i].style.display="";
        }
        else{
            bodyNode.removeChild(section2[i]);
        }
    }
}
     
function removeBtn(){
    let bodyNode = document.getElementsByTagName("body")[0];
    removeSections(bodyNode);
    bookGenerator(orginaljsonTab);
}     

function removeSections(bodyNode){
    let sectionLenth = 0;
    bodyNode.childNodes.forEach(function(element){
        if(element.nodeName.toLowerCase() == "section"){
            bodyNode.removeChild(element);
        }
    });

    let body = document.getElementsByTagName("body")[0];
    body.childNodes.forEach(function(element){
        if(element.nodeName.toLowerCase() == "section"){
            ++sectionLenth;
        }
    });

    if(sectionLenth > 0){
        removeSections(body);
    }
}
