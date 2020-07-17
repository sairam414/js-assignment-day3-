<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8 />
        <title>Print the current page.</title>
        <script src="js.js"></script>
    </head>
    <body>
      <script>
      <div id="example"></div>

<script type="text/javascript">

txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt+= "<p>Platform: " + navigator.platform + "</p>";
txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";

document.getElementById("example").innerHTML=txt;

</script>

      </script>
    </body>
</html>
