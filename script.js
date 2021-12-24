let data = [
  {
    name: "Sourabh kumar",
    Age: 21,
    Addres: "Bihar",
    languegs: "JavaScript",
    photo: "Sourabh.jpg",
  },
  {
    name: "Shubham kumar",
    Age: 23,
    Addres: "Bihar",
    languegs: "HTML",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Sameer kumar",
    Age: 21,
    Addres: "Jharkhand",
    languegs: "GO",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Chhotu kumar",
    Age: 18,
    Addres: "Bhathida",
    languegs: "CSS",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Mira kumari",
    Age: 19,
    Addres: "Bihar",
    languegs: "JavaScript",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Harihar Dash kumar",
    Age: 36,
    Addres: "UP",
    languegs: "Python",
    photo: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    name: "Sanjeev kumar",
    Age: 19,
    Addres: "Bihar",
    languegs: "CC+",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Abhishik kumar",
    Age: 35,
    Addres: "Bihar",
    languegs: "++C",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

function* grnreter() {
  i = 1;

  while (true) {
    yield i++;
  }
}
const gen = grnreter();

function cv(profile) {
  let index = 0;
  return {
    next: () => {
      if (index < profile.length) {
        return {
          value: profile[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const cvlist = cv(data);
const nextprofile = () => {
  let newCandidet = cvlist.next().value;
  let photos = document.querySelector(".photos");
  let detils = document.querySelector(".detils");
  if (newCandidet != undefined) {
    photos.innerHTML = `<img src="${newCandidet.photo}" alt="Image not fonded" >`;
    detils.innerHTML = `<ul >
                            <li class="num">No.${gen.next().value} </li>
                            <li><samp>${newCandidet.name}</samp></li>
                            <li >Age :-${newCandidet.Age} years old</li>
                            <li >Lives in${newCandidet.Addres}</li>
                            <li > Primarily works on <samp>${
                              newCandidet.languegs
                            }</samp>  </li>
                        </ul>`;
  } else {
    alert("finesd again check to click on ok");
    window.location.reload();
  }
};

nextprofile();
const next = document.getElementById("next");
next.addEventListener("click", nextprofile);


{/* <ul ">
                                <li >No.${gen.next().value} </li>
                                <li >Name :- ${newCandidet.name}</li>
                                <li >Age :-  ${newCandidet.Age} years old</li>
                                <li >Lives in ${newCandidet.Addres}</li>
                                <li > Primarily works on ${
                                  newCandidet.languegs
                                } </li>
                        </ul> */}