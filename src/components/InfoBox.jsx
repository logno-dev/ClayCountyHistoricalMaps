import "./InfoBoxDesign.css";

export default function InfoBox({ city }) {
  return (
    <div className="InfoBoxDesign text-white bg-red-400 rounded-md p-4 m-4 min-w-60">
      {city}
    </div>
  );
}
