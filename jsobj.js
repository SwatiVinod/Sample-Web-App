cast =[
    {  Name:"Millie Bobby Brown", DOB: "19/02/2004", Age: 17,  Place: "Marbella, Spain", 
     Cast: "Eleven" },
    
    { Name:"Noah Schnapp", DOB: "03/10/2004", Age: 16,   Place:"Scarsdale, New York",  
     Cast: "Will Byers" },
    
    { Name:"Finn Wolfhard", DOB: "23/12/2002", Age: 18,  Place: "Vancouver, Canada", 
     Cast: "Mike Wheeler" },

    { Name:"Joe Keery", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
     Cast: "Steve Harrington" },
    
    { Name:"Sadie Sink", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
     Cast: "Mad Max" },

    { Name:"Natalie Dyer", DOB: "24/04/1992", Age: 18,  Place: "Newburyport, Massachusetts", 
     Cast: "Nancy Wheeler" },
    
];

function out(n)
{
  var a=" ";
  for(x in cast[n])
        a="The role '" +cast[n]["Cast"] + "' is enacted by " + cast[n]["Name"] + " who was born on " + cast[n]["DOB"] + " at " + cast[n]["Place"] + " who's current age now is " + cast[n]["Age"] + ".<br>";
  document.getElementById("list").innerHTML=a;
}  
