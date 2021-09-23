var Container = {
  SetColor:function(color){
    var cont = document.querySelector('.container');
    cont.style.borderBottomColor = color;

    var logo = document.querySelector('.container a');
    logo.style.color = color;

    var alist = document.querySelectorAll('.container ul');
    var i = 0;
    while(i < alist.length){
          alist[i].style.color = color;
          i = i+1;
    }
  },
  SetImgDay:function() {
    document.getElementById("menu_button").src="images/menu_day.png";
    document.getElementById("night_day_button").src="images/day.png";
    document.getElementById("search_button").src="images/loupe_day.png";
  },
  SetImgNight:function() {
    document.getElementById("menu_button").src="images/menu_night.png";
    document.getElementById("night_day_button").src="images/night.png";
    document.getElementById("search_button").src="images/loupe_night.png";
  }
}

var Body = {
  SetColor:function(color){
    document.querySelector('body').style.color = color;
  },
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){
  if (self.value === 'night'){
    self.value = 'day';
    Body.SetBackgroundColor('#eeeeee');
    Body.SetColor('#123456');
    Container.SetColor('#123456');
    Container.SetImgDay();
  } else {
    self.value = 'night';
    Body.SetBackgroundColor('#222222');
    Body.SetColor('#eeeeee');
    Container.SetColor('#ffcc00');
    Container.SetImgNight();
  }
}
