// get btn_dl_pdf class = dl-pdf-btn
let btn_dl_pdf = document.getElementById('dl-pdf-btn');

// get cv-div id="pdf-cv"
let cv_div = document.getElementById('pdf-cv');

function generateRemuse(){
    var opt = {
        margin: 0,
        filename:       "TruongDinhPhu_Python_0948224950.pdf",
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 4, dpi: 72},
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
        },
    };
    html2pdf().set(opt).from(cv_div).save();
};

btn_dl_pdf.addEventListener('click', event => {
    generateRemuse();
    //handle click
});