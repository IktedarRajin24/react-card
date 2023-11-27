import { useReducer } from "react";
import "./App.css";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
import CardDetails from "./Components/CardDetails";
import ReactFlipCard from "reactjs-flip-card";
// import { ReactCardFlip } from "react-card-flip";

const initialState = {
  name: "",
  number: "",
  expiryDate: "",
  cvc: "",
  isFlip: false,
  isSubmit: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "number":
      return { ...state, number: action.payload };
    case "expiryDate":
      return { ...state, expiryDate: action.payload };
    case "cvc":
      return { ...state, cvc: action.payload };
    case "isFlip":
      if (state.name !== "" && state.number !== "" && state.expiryDate !== "") {
        return { ...state, isFlip: !state.isFlip };
      }
      return { ...state };
    case "submit":
      return { ...state, isSubmit: true };
    case "reset":
      return initialState;
    default:
      throw new Error("Action Invalid");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, number, expiryDate, isFlip, cvc, isSubmit } = state;
  const isComplete = name !== "" && number !== "" && expiryDate !== "";
  const isCVC = isComplete && cvc !== "";
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-400">
      {
        isSubmit ? (
          <CardDetails
            dispatch={dispatch}
            name={name}
            number={number}
            expiryDate={expiryDate}
            cvc={cvc}
          />
        ) : (
          <ReactFlipCard
            containerCss="2xl:w-1/5 xl:w-[30%] lg:w-2/5 md:w-1/2 sm:w-8/12 w-10/12  2xl:h-[26%] xl:h-[35%] lg:h-[35%] md:h-1/4 h-auto"
            flipCardStyle={{ transitionDuration: "1.5s" }}
            flipTrigger={"disabled"}
            flipByProp={isFlip}
            frontComponent={
              <CardFront
                name={name}
                number={number}
                expiryDate={expiryDate}
                dispatch={dispatch}
              />
            }
            backComponent={<CardBack cvc={cvc} dispatch={dispatch} />}
          />
        )
        //!isFlip ? (
        //   <CardFront
        //     name={name}
        //     number={number}
        //     expiryDate={expiryDate}
        //     dispatch={dispatch}
        //   />
        // ) : (
        //   <CardBack cvc={cvc} dispatch={dispatch} />
        // )
      }
      {isComplete && !isCVC && !isSubmit ? (
        <button
          className="bg-yellow-600 text-md px-5 py-1 rounded-2xl text-white font-semibold hover:bg-yellow-300 hover:text-black mt-12 transition-all ease-in delay-75"
          onClick={() => {
            dispatch({ type: "isFlip" });
          }}
        >
          Flip
        </button>
      ) : isCVC && !isSubmit ? (
        <button
          className="bg-yellow-600 text-md px-5 py-1 rounded-2xl text-white font-semibold hover:bg-yellow-300 hover:text-black mt-12 transition-all ease-in delay-75"
          onClick={() => {
            dispatch({ type: "submit" });
          }}
        >
          Submit
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
