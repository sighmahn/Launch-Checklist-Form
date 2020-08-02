// Write your JavaScript code here!
window.addEventListener("load", function() {
   console.log('window.addEventListner LOAD');
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form was submitted");
      let pilotName = document.getElementById("pilotName").value;
      let copilotName = document.getElementById("copilotName").value;
      let fuelLevel = document.getElementById("fuelLevel").value;
      let cargoMass = document.getElementById("cargoMass").value;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");

      if (
         pilotName === '' ||
         copilotName === '' ||
         fuelLevel === '' ||
         cargoMass === '' 
      ) {
         alert("All fields are required!");
         faultyItems.style.visibility = "hidden";
      }  else if (
         isNaN(fuelLevel) ||
         isNaN(cargoMass) ||
         !isNaN(pilotName) ||
         !isNaN(copilotName) 
      ) {
         alert("Make sure to enter valid information for each field");
         faultyItems.style.visibility = "hidden";
      } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready to launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready to launch`;
         pilotStatus.style.color = 'green';
         copilotStatus.style.color = 'green';
      }
       if (fuelLevel < 10000 && cargoMass > 10000) {
         document.getElementById('launchStatus').innerHTML ="Not Ready for launch";
         document.getElementById('launchStatus').style.color = 'red';
         document.getElementById('faultyItems').style.visibility = 'visible';
      }
      if (fuelLevel < 10000 && cargoMass < 10000) {
         document.getElementById('launchStatus').innerHTML ="Not Ready for launch";
         document.getElementById('launchStatus').style.color = 'red';
         document.getElementById('faultyItems').style.visibility = 'visible';
         launchStatus.innerHTML = "Fuel level to low for launch";
         launchStatus.style.color = "red";
         cargoStatus.style.color = 'green';
      }
      if (fuelLevel > 10000 && cargoMass < 10000) {
         document.getElementById('launchStatus').innerHTML ="Ready for launch!";
         document.getElementById('launchStatus').style.color = 'green';
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Fuel level ready for launch";
         cargoStatus.style.color = 'green';
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         
      }
      if (cargoMass > 10000 && fuelLevel > 10000) {
         document.getElementById('launchStatus').innerHTML ="Not Ready for launch";
         document.getElementById('launchStatus').style.color = 'red';
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
         cargoStatus.style.color = 'red';
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Fuel level ready for launch";
      }

      // document.getElementById('faultyItems').style.visibility = 'visible';
      /*
      document.getElementById("launchStatusCheck").innerHTML = `<h1>Pilot ${pilot.value} is ready for launch.</h1>
         <h1>Co-pilot ${copilot.value} is ready for launch.</h1>
         <h1>Fuel level ${fuelLevel.value} for launch.</h1>`;
      */
      fetch('https://handlers.education.launchcode.org/static/planets.json')
         .then(response => response.json())
         .then(data => {
           /* console.log(data);
            var mission = data[1];
            document.getElementById('missionTarget').innerHTML = `<h1>mission info here</h1>`;*/
            let targets = document.getElementById('missionTarget');
            let random = Math.round(Math.random() * data.length);
            let target = data[random];
            targets.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${target.name}</li>
               <li>Diameter: ${target.diameter}</li>
               <li>Star: ${target.star}</li>
               <li>Distance from Earth: ${target.distance}</li>
               <li>Number of Moons: ${target.moons}</li>
            </ol>
            <img src="${target.image}">`;
         });
      event.preventDefault();
   });
});

//} );
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
