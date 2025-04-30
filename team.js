const teamMembers = [
    {
      name: "Charchit",
      position: "CEO & Founder",
      image: "images/charchit1.jpeg",
      instagram: "https://www.instagram.com/charchit.singh_16/",
      linkedin: "#"
    },
    {
      name: "Ayush Samant",
      position: "COO",
      image: "images/ayush_samant.jpg",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Neelansh",
      position: "COO",
      image: "images/neelansh.jpeg",
      instagram: "https://www.instagram.com/neelansh_pratap_singh?igsh=bmRzZW5sb2w0dmRi",
      linkedin: "https://www.linkedin.com/in/neelansh-singh-894852218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Mayank",
      position: "Marketing Head",
      image: "images/mayank.jpeg",
      instagram: "https://www.instagram.com/m01ayank0?igsh=cDZvd2JncTBmam5s",
      linkedin: "https://www.linkedin.com/in/mayank-dhusia-807b3335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Piyush Saini",
      position: "Technical Lead",
      image: "images/piyush.jpg",
      instagram: "http://instagram.com/piyush_saini_40",
      linkedin: "https://www.linkedin.com/in/piyushsaini2004/"
    },
    {
      name: "Ayush Yadav",
      position: "Social Media Head",
      image: "images/ayush yadav.JPEG",
      instagram: "https://www.instagram.com/ayusx_h",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
    },
    {
      name: "Bhanu",
      position: "Media Head",
      image: "images/bhanu_picture.jpg",
      instagram: "https://optimusorgz.github.io/Optimusorgz/team.html#",
      linkedin: "https://optimusorgz.github.io/Optimusorgz/team.html#"
    },
    // Add more members similarly
  ];
  
  
  const container = document.getElementById("team-container");
  const template = container.querySelector(".card.template");
  
  teamMembers.forEach(member => {
    const card = template.cloneNode(true);
    card.classList.remove("template");
    card.style.display = "block";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", "100");
    card.setAttribute("data-aos-duration", "800");
  
    card.querySelector("img").src = member.image;
    card.querySelector("img").alt = member.name;
    card.querySelector("h3").textContent = member.name;
    card.querySelector("p").textContent = member.position;
    card.querySelectorAll("a")[0].href = member.instagram;
    card.querySelectorAll("a")[1].href = member.linkedin;
  
    container.appendChild(card);
  });
  