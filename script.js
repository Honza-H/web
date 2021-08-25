$(document).ready(function(){       //haha info v konzoli//
  console.log("Site loaded!")
})


function mojefunkce() {         //na .html akci .js popup//
  alert("Zpráva")
}


$(document).ready(function () { 
  $(document).click(function () {
     // if($(".navbar-collapse").hasClass("in")){
       $('.navbar-collapse').collapse('hide');
     // }
  });
});
