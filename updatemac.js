  
document.write(`
<html> 
  <head>
  <script src="https://icwcsuen2010.github.io/TM1109S1.github.io/header.js"></script> 

    <h1>Successful!</h1>
    <a>MAC address saved! Power cycle or reset the board to begin using the new MAC address.</a>

    <p>You will be redirected in <span id="counter">5</span> second(s).</p>
    <script type="text/javascript">
    function countdown() {
        var i = document.getElementById('counter');
        if (parseInt(i.innerHTML)<=0) {
            window.history.back();
        }
    if (parseInt(i.innerHTML)!=0) {
        i.innerHTML = parseInt(i.innerHTML)-1;
    }
    }
    setInterval(function(){ countdown(); },1000);
    </script>


  <script src="https://wadeenghoiwa.github.io/footer.js"></script> 

</html>
`);
