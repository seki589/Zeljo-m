const hamburger = document.querySelector(" .toggle");
const navList = document.querySelector(" .nav-list");
const menuItem = document.querySelectorAll('.nav-list ul li a')
const upButton = document.querySelector(".up");

hamburger.addEventListener("click",() => {
    navList.classList.toggle("active");
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 600) {
        upButton.style.right = '10px';
    } else{
        upButton.style.right = '-100px';
    }
})

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.toggle('active')
    })
})

// map
// function myMap() {
//     var mapProp1= {
//       center:new google.maps.LatLng(48.213268744943974, 16.33490732273148),zoom:18};
//     var map = new google.maps.Map(document.getElementById("googleMap1"),mapProp1);
//     var mapProp2= {
//       center:new google.maps.LatLng(51.508742,-0.120850),zoom:5};
//     var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
//     var mapProp3= {
//       center:new google.maps.LatLng(51.508742,-0.120850),zoom:5};
//     var map = new google.maps.Map(document.getElementById("googleMap3"),mapProp3);
// };

   