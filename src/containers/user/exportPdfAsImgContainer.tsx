import JsPDF, { jsPDF } from "jspdf";
import FooterComponent from "src/components/user/footer";
import HeaderArComponent from "src/components/headerAr";
import SchedualArComponent from "src/components/schedualArComponent";
import html2canvas from "html2canvas";

export default function ExportPDFImgContainer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-[#0369A1] p-2 text-[25px]">
        {" "}
        Preview (HTML2Canvas Method)
      </h1>
      <div className="border-gray border-2">
        {" "}
        <div id="pdfExport2" className="flex flex-col w-[596px] h-[841px] ">
          <HeaderArComponent />
          <SchedualArComponent />
          <div className="mt-auto">
            <FooterComponent />
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={generatePDF}
        type="button"
        className="m-5 h-[50px] px-[20px] bg-[#0EA5E91A] hover:bg-[#0369A1] rounded-lg font-bold text-[#0369A1] hover:text-[#ffffff]"
      >
        Export PDF
      </button>
    </div>
  );
}

const generatePDF = () => {
  html2canvas(document.getElementById("pdfExport2") as HTMLElement, {
    scale: 5,
  }).then((canvas) => {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("p", "pt", "a4", true);
    pdf.addImage(imgData, "PNG", 0, 0, 596, 842);
    //     for (var i = 1; i <= totalPDFPages; i++) {
    //  pdf.addImage(imgData, "PNG", 0, 0, 596, 841);
    //     }
    pdf.save("Weekly_SchedualImg.pdf");
  });
};
