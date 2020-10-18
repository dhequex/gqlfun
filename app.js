fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{all{properties{name}}}"})})
    .then(r => r.json())
    .then(data => {
  return data})
  .then ((all) => {
  
  let res = all.data.all.map(item => item.properties.name);
  res.forEach((i) => {
        
        let p = document.createElement("p");
        p.innerText = i;
        document.body.appendChild(p);
        })
  console.log(res)
  })
  