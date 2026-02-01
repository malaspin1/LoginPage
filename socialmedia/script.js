function like(name) {
  const like = document.querySelector("#" + name + " .post-interaction .like");
  if (like.classList.contains("liked")) {
    like.src = "img/like.png";
    like.classList.remove("liked");
    like.classList.add("invert");
  } 
  else {
    like.src = "img/liked.png";
    like.classList.remove("invert");
    like.classList.add("liked");
    if (
      document
        .querySelector("#" + name + " .post-interaction .deslike")
        .classList.contains("desliked")
    ) {
      deslike(name);
    }
  }
}
function deslike(name) {
  const deslike = document.querySelector(
    "#" + name + " .post-interaction .deslike",
  );
  if (deslike.classList.contains("desliked")) {
    deslike.src = "img/deslike.png";
    deslike.classList.remove("desliked");
    deslike.classList.add("invert");
  } else {
    deslike.src = "img/unliked.png";
    deslike.classList.remove("invert");
    deslike.classList.add("desliked");
    if(document.querySelector("#" + name + " .post-interaction .like").classList.contains("liked")){
        like(name)
    }
  }
}
