const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const suggestionItems = document.querySelectorAll(".suggestions ul li");
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
function search(str) {
  return fruit.filter((fruitItem) =>
    fruitItem.toLowerCase().includes(str.toLowerCase())
  );
}

function searchHandler(e) {
  const inputValue = e.target.value.trim();
  const results = search(inputValue);
  showSuggestions(results, inputValue);
}
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      const listItem = document.createElement("li");
      const matchedIndex = results[i]
        .toLowerCase()
        .indexOf(inputVal.toLowerCase());

      if (matchedIndex !== -1) {
        const matchedPart = results[i].substring(
          matchedIndex,
          matchedIndex + inputVal.length
        );
        const remainingPart = results[i].substring(
          matchedIndex + inputVal.length
        );
        listItem.innerHTML = `${results[i].substring(
          0,
          matchedIndex
        )}<strong>${matchedPart}</strong>${remainingPart}`;
      } else {
        listItem.textContent = results[i];
      }

      suggestions.appendChild(listItem);
    }

    const newSuggestionItems = document.querySelectorAll(".suggestions ul li");
    newSuggestionItems.forEach((item) => {
      item.addEventListener("mouseover", highlightSuggestion);
      item.addEventListener("mouseout", removeHighlight);
    });
  } else {
    const noMatchItem = document.createElement("li");
    noMatchItem.textContent = "No matches found";
    suggestions.appendChild(noMatchItem);
  }
}

function highlightSuggestion(e) {
  e.target.classList.add("highlighted");
}

function removeHighlight(e) {
  e.target.classList.remove("highlighted");
}

suggestionItems.forEach((item) => {
  item.addEventListener("mouseover", highlightSuggestion);
  item.addEventListener("mouseout", removeHighlight);
});

function useSuggestion(e) {
  if (e.target.tagName === "li") {
    const input = document.querySelector("#fruit");
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
}
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
