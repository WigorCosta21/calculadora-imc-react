import { useState, MouseEvent } from "react";
import "./Form.css";

const Form = () => {
  const [weight, setWeight] = useState<number>(90);
  const [height, setHeight] = useState<number>(1.82);
  const [classification, setClassification] = useState("");
  const [result, setResult] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateIMC = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const imc = Number((weight / (height * height)).toFixed(2));

    if (weight === 0 || height === 0) {
      alert("Peso ou altura não pode ser zero");
      return;
    }

    switch (true) {
      case imc < 18.5:
        setClassification("Magreza");
        setColor("#ADD8E6");
        break;
      case imc < 24.9:
        setClassification("Normal");
        setColor("#008000");
        break;
      case imc < 30:
        setClassification("Sobrepeso");
        setColor("#FFFF00");
        break;
      case imc < 34.9:
        setClassification("Obseidade grau I");
        setColor("#FFA500");
        break;
      case imc < 39.9:
        setClassification("Obesidade grau II");
        setColor("#FF0000");
        break;
      default:
        setClassification("Obsidade grau III");
        setColor("#800080");
        break;
    }

    setResult(imc);
    setShowResult(true);
  };

  return (
    <>
      <form className="form">
        <div className="form-item">
          <label htmlFor="weight">Peso em Kg</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={({ target }) => setWeight(Number(target.value))}
          />
        </div>
        <div className="form-item">
          <label htmlFor="height">Altura em metros</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={({ target }) => setHeight(Number(target.value))}
          />
        </div>
        <button className="btn" onClick={calculateIMC}>
          Calcular
        </button>
      </form>
      {showResult && (
        <div className="result">
          <p>
            Seu IMC: <span style={{ color }}>{result}</span>{" "}
          </p>
          <p>
            Situação atual: <span style={{ color }}>{classification}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Form;
