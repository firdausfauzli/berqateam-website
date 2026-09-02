const services=[
  ["BC","Business Card","Kad bisnes kemas untuk identiti profesional","business-card.webp"],
  ["SG","Signage","Papan tanda untuk kedai dan acara","signage.webp"],
  ["NB","Sticker Nama Buku","Label nama sekolah yang praktikal","book-name-sticker.webp"],
  ["RS","Rubber Stamp","Cop custom untuk urusan harian","rubber-stamp.webp"],
  ["CT","Custom Cake Topper","Topper istimewa mengikut tema","cake-topper.webp"],
  ["NS","Name Tag Sulam","Sulaman nama yang tahan lama","name-tag.webp"],
  ["BN","Banner","Cetakan promosi bersaiz besar","banner.webp"],
  ["ST","Sticker","Pelbagai bentuk, saiz dan kegunaan","sticker.webp"],
  ["BT","Bunting","Promosi mudah dilihat dan dipasang","bunting.webp"],
  ["BB","Bill Book","Buku bil custom untuk perniagaan","billbook.webp"],
  ["FL","Flyers","Edaran promosi yang menarik","flyers.webp"],
  ["TS","T-Shirt Printing","Cetakan baju untuk kumpulan dan acara","tshirt.webp"],
  ["MG","Custom Mug","Mug bercetak untuk hadiah dan kenangan","mug.webp"],
  ["GF","Gift","Hadiah custom untuk hari istimewa","gift.webp"]
];
const grid=document.querySelector("#serviceGrid");
grid.innerHTML=services.map(([icon,name,desc,image])=>`<a class="service-card" style="background-image:url('assets/services/${image}')" href="https://wa.me/60126472762?text=${encodeURIComponent(`Hai Berqateam, saya ingin bertanya harga untuk ${name}.`)}" target="_blank" rel="noopener"><span class="service-icon">${icon}</span><h3>${name}</h3><p>${desc}</p></a>`).join("");
document.querySelector("#year").textContent=new Date().getFullYear();
