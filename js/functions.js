function calculate(x){
    form.display.value=form.display.value+x;
  }
  function can(x){
    form.display.value=x;
  }
  function calc(){
    form.display.value=eval(form.display.value);

  }
  function fact(){
    var n=eval(form.display.value);
    function factorial(n) {
        if (n < 0) return;
        if (n < 2) return 1;
        return n * factorial(n - 1);
      }
     
  var y=factorial(n);
   form.display.value=y;
  }

  function expa(){
    var z=Math.exp(eval(form.display.value));
    form.display.value=z;
  }

  function loga(){
    var z=Math.log10(eval(form.display.value));
    form.display.value=z;
  }
  function sina(){
    var z=Math.sin(eval(form.display.value*Math.PI/180));
    form.display.value=z;
  }
  function cosa(){
    var z=Math.cos(eval(form.display.value*Math.PI/180));
    form.display.value=z;
  }
  function tana(){
    var z=Math.tan(eval(form.display.value*Math.PI/180));
    form.display.value=z;
  }
  function sqrta(){
    var z=Math.sqrt(eval(form.display.value));
    form.display.value=z;
  }
  function coseca(){
    var z=Math.pow(Math.sin(eval(form.display.value*Math.PI/180)),-1);
    form.display.value=z;
  }
  function seca(){
    var z=Math.pow(Math.cos(eval(form.display.value*Math.PI/180)),-1);
    form.display.value=z;
  }
  function cota(){
    var z=Math.pow(Math.tan(eval(form.display.value*Math.PI/180)),-1);
    form.display.value=z;
  }