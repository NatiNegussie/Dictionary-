async function find(){
    const val = document.getElementById("val").value;
    const meaning = document.getElementById("meaning");
    const text = document.getElementById("text");
    const au = document.getElementById("au");
    au.style.display = "none";
    try{
    text.innerHTML = "loading..."
    text.style.opacity = "1";
        const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + val);
    const res = await data.json();
    console.log(res);
    text.innerHTML = res[0].word;
    meaning.innerHTML = res[0].meanings[1].definitions[0].definition;
    au.style.display = "block";
    const audio = new Audio(res[0].phonetics[0].audio);
    audio.play();
    text.style.opacity = "1";
    meaning.style.opacity = "1";
    } catch(err) {
        meaning.innerHTML = "Sorry Error Has Occurred ";
        text.innerHTML = "not available";
    }
}
