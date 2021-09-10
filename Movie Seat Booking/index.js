const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat');
const movieSelected = document.querySelector('select');
const totalPrice = document.querySelector('#total-price');
const seatCount = document.querySelector('#count');

populateUI();

//total cost calculator and local storage
function priceCounter(){
  const seatsSelected = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...seatsSelected].map((seat)=>[...seats].indexOf(seat));

  //selected seats count
  seatCount.innerText = seatsSelected.length;
  //total price of selected seats
  totalPrice.innerText = seatsSelected.length * +movieSelected.value;

  //localStorage of selected seat, movie index
  localStorage.setItem('seatsSelected', JSON.stringify(seatsIndex));
  localStorage.setItem('selectedMovieIndex', movieSelected.selectedIndex);
}

//Get data from local storage and populate UI
function populateUI(){
  const seatsSelected = JSON.parse(localStorage.getItem('seatsSelected'));

  if(seatsSelected !== null && seatsSelected.length > 0){
    seats.forEach(function(seat, index){
      if(seatsSelected.indexOf(index) > -1){
        seat.classList.add('selected');
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if(selectedMovieIndex !==null){
    movieSelected.selectedIndex = selectedMovieIndex;
  }

  priceCounter();
}

//Event - select seats
function seatSelector(){
  container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
    }
    priceCounter();
  })
}

//Event - movie option change
function optionChange(){
document.addEventListener('input', ()=>{priceCounter();})
}

//Call event functions
seatSelector();
optionChange();
