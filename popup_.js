// load sites from memory
const template = document.getElementById("li_template");
const elements = new Set();
var blocked_sites = new Set();
chrome.storage.local.get(["blocked_sites"]).then((result) => {

   console.log(result)
   blocked_sites = result.key;
   console.log(blocked_sites)
});

chrome.storage.local.set({ test: "blocked_sites_temp" }).then(() => {
  console.log('added')
})
// display blocked sites

for (const site of blocked_sites) {
    const element = template.content.firstElementChild.cloneNode(true);
    console.log(site)
    
  
    element.querySelector(".title").textContent = site;
    element.querySelector(".pathname").textContent = "test";
    
    elements.add(element);
  }
  document.querySelector("ul").append(...elements);

// add a blocked site to the list


const block_button = document.querySelector("button");
block_button.addEventListener("click", async () => {

  // load list from memory
  var blocked_sites_temp = new Set();
  chrome.storage.local.get(["blocked_sites"]).then((result) => {
    console.log('inside storage call')
    console.log(result)
    blocked_sites_temp = result.key;
  });

  // get element and add url to it
  
  const blocked = document.getElementById('apivalue').value;

  blocked_sites_temp.add(blocked)

  // update list in chrome storage

  chrome.storage.local.set({ blocked_sites: "blocked_sites_temp" }).then(() => {
    
  });


  const element = template.content.firstElementChild.cloneNode(true);
  element.querySelector(".title").textContent = blocked;
  element.querySelector(".pathname").textContent = blocked;
 
  document.querySelector("ul").append(element);
//   await chrome.windows.update(tab.windowId, { focused: true });

});


// update 