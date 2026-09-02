const services=[
  ["BC","Business Card","Kad bisnes kemas untuk identiti profesional"],
  ["SG","Signage","Papan tanda untuk kedai dan acara"],
  ["NB","Sticker Nama Buku","Label nama sekolah yang praktikal"],
  ["RS","Rubber Stamp","Cop custom untuk urusan harian"],
  ["CT","Custom Cake Topper","Topper istimewa mengikut tema"],
  ["NS","Name Tag Sulam","Sulaman nama yang tahan lama"],
  ["BN","Banner","Cetakan promosi bersaiz besar"],
  ["ST","Sticker","Pelbagai bentuk, saiz dan kegunaan"],
  ["BT","Bunting","Promosi mudah dilihat dan dipasang"],
  ["BB","Bill Book","Buku bil custom untuk perniagaan"],
  ["FL","Flyers","Edaran promosi yang menarik"],
  ["TS","T-Shirt Printing","Cetakan baju untuk kumpulan dan acara"],
  ["MG","Custom Mug","Mug bercetak untuk hadiah dan kenangan"],
  ["GF","Gift","Hadiah custom untuk hari istimewa"]
];
const grid=document.querySelector("#serviceGrid");
grid.innerHTML=services.map(([icon,name,desc])=>`<a class="service-card" href="https://wa.me/60126472762?text=${encodeURIComponent(`Hai Berqateam, saya ingin bertanya harga untuk ${name}.`)}" target="_blank" rel="noopener"><span class="service-icon">${icon}</span><h3>${name}</h3><p>${desc}</p></a>`).join("");
document.querySelector("#year").textContent=new Date().getFullYear();
