// get btn_dl_pdf class = dl-pdf-btn
let btn_dl_pdf = document.getElementById('dl-pdf-btn');

// get cv-div id="pdf-cv"
let cv_div = document.getElementById('pdf-cv');

let opt = {
    margin:         0,
    filename:       "dinhphuremuse.pdf",
    image:{type:    "jpeg",quality:1},
    html2canvas:    {scale:4 },
    jsPDF:          {format: 'a4', orientation: 'portrait'}
};

function generateRemuse(){
    html2pdf(cv_div)
};

btn_dl_pdf.addEventListener('click', event => {
    generateRemuse();
    //handle click
});