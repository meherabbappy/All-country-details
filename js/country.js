const loadCountry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountry(data))
}
loadCountry();

const displayCountry = (countries) =>{
    // for(const country of countries){
    //     console.log(country)
    // }
    const countryDiv = document.getElementById('country');
    countries.forEach(country =>{

        const div = document.createElement('div')
        div.classList.add('country');

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadCountryByName('${country.name}')"> Details</button>
        `;
        countryDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
 
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
  const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h4>Country Name:${country.name}</h4>
    <p>Population:${country.population}</p>
    <p>Area : ${country.area}</p>
    <p>Borders : ${country.borders}</p>

    <p>CallingCodes : ${country.callingCodes}</p>
        <p>Name Spelling : ${country.altSpellings}</p>
        <p>Language : ${country.languages[0].name} ${country.languages[0].nativeName}</p>
        <p>Currencies : ${country.currencies[0].code} ${country.currencies[0].name} ${country.currencies[0].symbol}</p>


    <img width = "200px" src ="${country.flag}">
    `


}