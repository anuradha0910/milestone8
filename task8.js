

<!DOCTYPE html>
<html>
<body>

<center>
<h2><u>CREATE A LIST</u> </h2>
</center>
<p><b>Create a list of course items that are available in a Training Centre and arrange them in order and perform various operations like reversed etc...</b></p>
<p id="demo"></p>
<p id="demo1"></p>
<b><p>ORDERED LIST</p></b>
<ol start=5>
<li type="circle">Artificial Intelligence</li>
<li type="square">Mobile App Development</li>
<li type="circle">Web Programming</li>
</ol>
<b><p>UNORDERED LIST</p></b>
<ul>
<li>Mobile App Development</li>
<li>Web Programming</li>
<li>Artificial Intelligence</li>
</ul>
<b><p>DEFINITION LIST</p></b>
<dl>
<dt>Mobile App Development</dt>
<dd>The process of creating software applications that run on a mobile device    </dd>
</dl>
<dl>
<dt>Web Programming/Web Design</dt>
<dd> It refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security.  </dd>
</dl>
<dl>
<dt>Artificial Intelligence.</dt>
<dd> The simulation of human intelligence processes by machines, especially computer systems.   </dd>
</dl>
<dl>

<script>
const courses = ["Mobile App Development", "Web Programming", "Aritificial Intelligences"];
document.getElementById("demo").innerHTML = courses.reverse();
document.getElementById("demo1").innerHTML = courses.sort();

</script>

</body>
</html>


