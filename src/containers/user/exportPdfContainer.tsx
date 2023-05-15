import JsPDF from "jspdf";
import HeaderComponent from "src/components/user/header";
import FooterComponent from "src/components/user/footer";
import SchedualComponent from "src/components/schedualComponent";

export default function ExportPDFContainer() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-[#0369A1] p-2 text-[25px]"> Preview  (to HTML Method) </h1>
      <div className="border-gray border-2">
        {" "}
        <div id="pdfExport" className="flex flex-col w-[596px] h-[841px] ">
          <HeaderComponent />
          <SchedualComponent />
          <div className="mt-auto">
            <FooterComponent/>
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
  const doc = new JsPDF("p", "pt", "a4", true);
  doc.addFont("/assets/fonts/Cairo-Regular.ttf", "Cairo", "normal");
  doc.setFont("Cairo"); // set font
  
  doc.html(document.querySelector("#pdfExport") as HTMLElement).then(() => {
    doc.save("weekly-schedule.pdf");
  });
};
