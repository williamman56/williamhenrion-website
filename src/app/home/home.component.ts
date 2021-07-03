import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public slides = [
		{ src: "/assets/comic-thumbnail.jpg", name: "Translated Twitter Comics", desc: "Japanese Twitter features a diverse selection of short and entertaining manga posted by fans, people practicing their art, or on the side by larger artists. I have enjoyed reading many of these, and so I have translated a small selection that I plan to continue expanding as I find ones that I enjoy.", link: "/comics" },
		{ src: "/assets/timeline-thumbnail.jpg", name: "Timeline Assistant", desc: "I enjoy 'writing' my own stories in my head as a daydream, but sometimes I have the urge to put them into writing. However, I can never plan out the stories properly in my head, and so I made this tool to structure the ones I particularly enjoy. As such, the features are tailored to how I think about story-telling.", link: "/timeline" },
		{ src: "/assets/bio-thumbnail.jpg", name: "About Me", desc: "I created this website to serve as a place to complement and show off my hobbies. I intend to continually be adding to this website as I develop new interests or try to learn new things." }
	]
	
  constructor() { }

  ngOnInit(): void {
  }

}
