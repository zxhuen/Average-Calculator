import "bootstrap/dist/css/bootstrap.min.css";
import "./MainBody.css";
import { useState } from "react";
import { motion } from "motion/react";

const MainBody = () => {
  const [Prelims, setPrelims] = useState<string>("");
  const [Midterms, setMidterms] = useState<string>("");
  const [PreFinals, setPreFinals] = useState<string>("");
  const [Finals, setFinals] = useState<string>("");
  const [FinalGrade, setFinalGrade] = useState<string>("--");
  const [word, onWord] = useState("");

  const [change, switchChange] = useState(false);

  const handlePrelims = (prelim: React.ChangeEvent<HTMLInputElement>) => {
    setPrelims(prelim.target.value);
  };
  const handleMidterms = (midterm: React.ChangeEvent<HTMLInputElement>) => {
    setMidterms(midterm.target.value);
  };
  const handlePreFinals = (prefi: React.ChangeEvent<HTMLInputElement>) => {
    setPreFinals(prefi.target.value);
  };
  const handleFinals = (final: React.ChangeEvent<HTMLInputElement>) => {
    setFinals(final.target.value);
  };

  const handleComputation = () => {
    const numericPrelims = parseFloat(Prelims);
    const numericMidterms = parseFloat(Midterms);
    const numericPreFi = parseFloat(PreFinals);
    const numericFinals = parseFloat(Finals);

    if (
      !isNaN(numericPrelims) &&
      !isNaN(numericMidterms) &&
      !isNaN(numericPreFi) &&
      !isNaN(numericFinals)
    ) {
      const finalGrade =
        (numericPrelims + numericMidterms + numericPreFi + numericFinals) / 4;

      if (finalGrade <= 100 && finalGrade >= 97.5) {
        const final = finalGrade.toString();
        setFinalGrade(final);
        switchChange(!change);
        onWord("or 1.00");
      } else if (finalGrade <= 97.49 && finalGrade >= 94.5) {
        const final = finalGrade.toString();
        setFinalGrade(final);
        switchChange(!change);
        onWord("or 1.25");
      } else if (finalGrade <= 94.49 && finalGrade >= 91.5) {
        const final = finalGrade.toString();
        setFinalGrade(final);
        switchChange(!change);
        onWord("or 1.50");
      } else if (finalGrade <= 91.49 && finalGrade >= 88.5) {
        const final = finalGrade.toString();
        setFinalGrade(final);
        switchChange(!change);
        onWord("or 1.75");
      } else if (finalGrade > 100) {
        alert("Higher than 100 is non eligible");
      }

      if (!change) return finalGrade;
    } else {
      alert("Please fill out all the textboxes :)");
    }
  };

  return (
    <motion.div
      className="w-full max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 my-40"
      id="MainBodyContainer"
      initial={{
        y: 80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 200,
      }}
    >
      <div className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Prelim"
          value={Prelims}
          onChange={handlePrelims}
        />
        <input
          type="number"
          placeholder="Midterm"
          value={Midterms}
          onChange={handleMidterms}
        />
        <input
          type="number"
          placeholder="Prefinal"
          value={PreFinals}
          onChange={handlePreFinals}
        />
        <input
          type="number"
          placeholder="Final"
          value={Finals}
          onChange={handleFinals}
        />

        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md "
          onClick={handleComputation}
        >
          Calculate Grade
        </button>

        <h1
          className="text-lg font-semibold text-center mt-4"
          id="finalGradeText"
        >
          Your Final Grade:
        </h1>
        <h1 className="text-2xl font-bold text-center" id="finalGrade">
          {FinalGrade} {word}
        </h1>
      </div>
    </motion.div>
  );
};

export default MainBody;
