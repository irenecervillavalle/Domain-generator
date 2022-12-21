/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com"];

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let m = 0; m < noun.length; m++) {
        for (let s = 0; s < extension.length; s++)
          console.log(pronoun[i] + adj[j] + noun[m] + extension[s]);
      }
    }
  }
};
extension.push(".io");
extension.push(".es");
extension.push(".net");
