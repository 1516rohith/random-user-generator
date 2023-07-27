const apiEP = "https://randomuser.me/api/"
let userlist = [];



const fetchUser = () => {
    try{
      
    //     fetch(apiEp).then((response) => {
    //         return response.json()

    //     })
    //    .then((data) => {
          
    //    })
        const response = await fetch(apiEP);
        const data = await response.json();
        userlist = data.results;

       
     }
     
     catch (error) {
        console.log(error);
    }
};
fetchUser();
const display = users => {
let str = ""
users.map((usr, i)=>{
    str += 
})
document.getElementById("list")
}
<script>
  const data = [
    { name: "John", gender: "male" },
    { name: "Alice", gender: "female" },
    { name: "Michael", gender: "male" },
    // Add more data here...
  ];

  function filterData(searchTerm, gender) {
    const filteredData = data.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const genderMatch = gender === "all" || item.gender === gender;
      return nameMatch && genderMatch;
    });
    return filteredData;
  }

  function displayResults(results) {
    const resultList = document.getElementById("results");
    resultList.innerHTML = "";

    results.forEach(result => {
      const li = document.createElement("li");
      li.textContent = result.name;
      resultList.appendChild(li);
    });
  }

  function updateSearchResults() {
    const searchTerm = document.getElementById("searchInput").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const filteredResults = filterData(searchTerm, gender);
    displayResults(filteredResults);
  }

  // Event listeners
  document.getElementById("searchInput").addEventListener("input", updateSearchResults);
  document.querySelectorAll('input[name="gender"]').forEach(radio =>
    radio.addEventListener("change", updateSearchResults)
  );

  // Initial display of results
  updateSearchResults();
</script>

