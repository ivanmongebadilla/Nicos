const images = document.querySelectorAll('.carousel img');
let index = 0;

//JSON for EN / ES
const translation = {
    en: {
        intro: "Fresh Mexican Cuisine from the American Southwest",
        history: "What started as a small independent restaurant, has transformed into a popular family business. Nico’s was founded by Nicolas Moran Carreon in San Diego, and in 1993, his brother Prieto opened the first Nico’s in Arizona. Today, 23 locations can be found scattered across San Diego and Arizona. In 2023, the very first Nico’s international location opened its doors in Eindhoven. All locations are run by the children and grandchildren of Nicolas and his brothers and sisters. And business continues to grow; but make no mistake, Nico’s is not a chain or franchise (at least for now).",
        follow: "Follow Us",
        historyTitle: "Our History",
        locationTitle: "Our Locations",
        galleryTitle: "Gallery"
    },
    es: {
        intro: "Cocina Mexicana Fresca del Suroeste de los Estados Unidos",
        history: "Lo que comenzó como un pequeño restaurante independiente se ha transformado en un popular negocio familiar. Nico’s fue fundado por Nicolás Morán Carreón en San Diego, y en 1993, su hermano Prieto abrió el primer Nico’s en Arizona. Hoy en día, hay 23 sucursales repartidas entre San Diego y Arizona. En 2023, la primera ubicación internacional de Nico’s abrió sus puertas en Eindhoven. Todas las sucursales son administradas por los hijos y nietos de Nicolás y sus hermanos y hermanas. Y el negocio sigue creciendo; pero no te equivoques, Nico’s no es una cadena ni una franquicia (al menos por ahora).",
        follow: "Siguenos",
        historyTitle: "Nuestra Historia",
        locationTitle: "Ubicaciones",
        galleryTitle: "Galeria"
    }
}

function showImage(i) {
    images.forEach((img, idx) => img.classList.toggle('active', idx === i));
}

function changeLanguage(lang) {
    document.getElementById("introtxt").innerText = translation[lang].intro;
    document.getElementById("historytxt").innerText = translation[lang].history;
    document.getElementById("followtxt").innerText = translation[lang].follow;
    document.getElementById("historytitle").innerText = translation[lang].historyTitle;
    document.getElementById("locationstitle").innerText = translation[lang].locationTitle;
    document.getElementById("gallerytitle").innerText = translation[lang].galleryTitle;
}

setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 3000); // Auto-switch every 3 seconds