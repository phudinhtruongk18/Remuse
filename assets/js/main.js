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
    var opt = {
        margin: 0.3,
        filename: 'download.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 4, dpi: 72, letterRendering: true},
        jsPDF: {unit: 'in', format: 'A2'},
        html2canvas: {
            onclone: (element) => {
                const svgElements = Array.from(element.querySelectorAll('svg'));
                svgElements.forEach(s => {
                    const bBox = s.getBBox();
                    s.setAttribute("x", bBox.x);
                    s.setAttribute("y", bBox.y);
                    s.setAttribute("width", bBox.width);
                    s.setAttribute("height", bBox.height);
                })
            }
        }
    };
    html2pdf().set(opt).from(cv_div).save();
};

btn_dl_pdf.addEventListener('click', event => {
    generateRemuse();
    //handle click
});