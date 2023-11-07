/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name:Abdulelah Alanazi 
 * Email:Alanaza7@oregonstate.edu 
 */
//Vars for the button and the modal 
var OpenButton = document.getElementById("sell-something-button")
var closingButton = document.getElementById("modal-close")
var CancelButton = document.getElementById("modal-cancel")
var accept = document.getElementById("modal-accept")

// var for the posts 
var postText = document.getElementById('post-text-input');
var PhotoLink = document.getElementById('post-photo-input');
var priceInput = document.getElementById('post-price-input');
var CityInput = document.getElementById('post-city-input');
var CondStatus = document.getElementsByName('post-condition');


var seelingModal = document.getElementById("sell-something-modal")
var backdropModal = document.getElementById('modal-backdrop');


//var for fillters 
var post = document.getElementById('posts');
var UpdateButton = document.getElementById('filter-update-button');
var filterText = document.getElementById('filter-text');

var MinPrice  = document.getElementById('filter-min-price');
var MaxPrice = document.getElementById('filter-max-price');
var CityFilter = document.getElementById('filter-city');
var CondFillter = document.getElementsByName("filter-condition");

// Listeners 

OpenButton.addEventListener('click', openSellMod);
closingButton.addEventListener("click", closeSellMod);
CancelButton.addEventListener("click", closeSellMod);
accept.addEventListener("click" , acceptButton)
UpdateButton.addEventListener("click", FilteringPosts)

//functions
function openSellMod(){
    seelingModal.style.display = "block"
    backdropModal.style.display= "block"
}


function FilteringPosts(){

}
function closeSellMod(){
    seelingModal.style.display = "none"
    backdropModal.style.display = "none"
    postText.value = ""
    PhotoLink.value= ""
    priceInput.value =""
    CityFilter.value = ""

    
}



function checkPost(){
    if (postText.value == "" || PhotoLink.value =="" || priceInput == "" || CityInput.value == ""){
        return true;

    } else {
        return false;
    }


}

function acceptButton() {
if (checkPost() == true ){
    alert ("Complete rquired Feilds")
} else{ 
    createNewPost(postText.value, PhotoLink.value, priceInput.value, CityInput.value, FilterCond());
    closeSellMod();

}

}

function FilterCond()
{
  for(var i = 0; i < CondStatus.length; i++)
  {
    if(CondStatus[i].checked == true)
    {
      return CondStatus[i].value;
    }
  }
}

function createNewPost(postText, PhotoLink, priceInput, CityInput, CondStatus)
{
  var postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.setAttribute('data-price', priceInput);
  postDiv.setAttribute('data-city', CityInput);
  postDiv.setAttribute('data-condition', CondStatus);

  var postContentsDiv = document.createElement('div');
  postContentsDiv.classList.add('post-contents');
  postDiv.appendChild(postContentsDiv);

  var postImageContainerDiv = document.createElement('div');
  postImageContainerDiv.classList.add('post-image-container');
  postContentsDiv.appendChild(postImageContainerDiv);

  var image = document.createElement('img');
  image.src = PhotoLink;
  postImageContainerDiv.appendChild(image);

  var postInfoContainerDiv = document.createElement('div');
  postInfoContainerDiv.classList.add('post-info-container');
  postContentsDiv.appendChild(postInfoContainerDiv);

  var linkA = document.createElement('a');
  linkA.classList.add('post-title');
  linkA.href = "#";
  linkA.textContent = postText;
  postInfoContainerDiv.appendChild(linkA);

  var postPriceSpan = document.createElement('span');
  postPriceSpan.classList.add('post-price');
  postPriceSpan.textContent = "$" + priceInput;
  postInfoContainerDiv.appendChild(postPriceSpan);

  var postCitySpan = document.createElement('span');
  postCitySpan.classList.add('post-city');
  postCitySpan.textContent = "(" + CityFilter + ")";
  postInfoContainerDiv.appendChild(postCitySpan);

  post.appendChild(postDiv);
}


function FilteringPosts(){
    filterpostText();
    filterValue();
    filtercities();
    filtercondetion();
    
}

function textreplacement (text){
    var clnText = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '');
    return clnText;

}
function filterpostText (){
    var selectPost = document.querySelectorAll(".post")
    var clnText = textreplacement(filterText.value)
    var text = clnText.toLowerCase();

    for (i = 0; i<selectPost.length; i++)
    {
        if(selectPost[i].querySelector(".post-title").textContent.toLowerCase().indexOf(text) == -1)
        {
          selectPost[i].parentNode.removeChild(selectPost[i]);
    }
}
}

function filterValue()
{
  var selectPost = document.querySelectorAll('.post');
  var min = Number(MinPrice.value);
  var max = Number(MaxPrice.value);

  if(max == '')
  {
    max = Number.MAX_VALUE;
  }
  if(min == '')
  {
    min = Number.MIN_VALUE;
  }

  for(var i = 0; i < selectPost.length; i++)
  {
    if(Number(selectPost[i].getAttribute("data-price")) < min || Number(selectPost[i].getAttribute("data-price")) > max)
    {
      selectPost[i].parentNode.removeChild(selectPost[i]);
    }
  }
}

function filtercities (){
    var selectPost = document.querySelectorAll('.post');
  var city = CityFilter.value;

  if(city != 0)
  {
    for(var i = 0; i < selectPost.length; i++)
    {
      if(city != selectPost[i].getAttribute("data-city"))
      {
        selectPost[i].parentNode.removeChild(selectPost[i]);
      }
    }
  }
}

function filtercondetion (){
    {
        var selectPost = document.querySelectorAll('.post');
      
        if(findCondition() != 0)
        {
          for(var i = 0; i < selectPost.length; i++)
          {
            if(findCondition().indexOf(selectPost[i].getAttribute("data-condition")) == -1)
            {
              selectPost[i].parentNode.removeChild(selectPost[i]);
            }
          }
        }
      }
      
}

function findCondition()
{
  var conditionArray = [];

  for (var i = 0; i < CondFillter.length; i++)
  {
    if(CondFillter[i].checked !=  false)
    {
      conditionArray.push(CondFillter[i].value);
    }
  }

  if(conditionArray.length != 0)
  {
    return conditionArray;
  }
  else
  {
    return 0;
  }
}


