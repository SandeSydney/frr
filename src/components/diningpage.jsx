import Container from "react-bootstrap/Container";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function DiningPage() {
  return (
    <>
      <div className="dining_landing">
        <div className="dining_main">
          <h1 className="font-bold">- DINE WITH US -</h1>
          <p className="text-white text-xl md:text-2xl font-semibold font-[Alegreya SC]">
            ... If you haven't had our nyama choma then you haven't had nyama
            choma yet{" "}
            <span>
              <FormatQuoteIcon className="text-[#ffcf62]" />
            </span>
          </p>
        </div>
      </div>
      <Container></Container>
    </>
  );
}
