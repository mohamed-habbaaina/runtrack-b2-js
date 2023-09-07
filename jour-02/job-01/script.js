

function changerCouleurFond() {
    const largeurEcran = window.innerWidth;

    if (largeurEcran < 504) {

        document.body.style.backgroundColor = '#003049';
    } else if (largeurEcran >= 504 && largeurEcran < 1336) {

        document.body.style.backgroundColor = '#d90429';
    } else {

        document.body.style.backgroundColor = '#ffb703';
    }
}

// AddEventListeners
window.addEventListener('load', changerCouleurFond);
window.addEventListener('resize', changerCouleurFond);
