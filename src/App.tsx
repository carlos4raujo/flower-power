import FlowerIcon from "./assets/flower.svg"
import EnvelopeIcon from "./assets/envelope.svg"

function App() {
  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="flex items-center justify-center">
        <img className="max-w-16 mr-4" src={FlowerIcon} alt="Icono" />
        <h1 className="text-3xl lg:text-6xl font-funnel font-bold text-[#631b3b]">FlowerPower</h1>
      </div>
      <button className="mt-4 ml-6 flex bg-[#631b3b] text-[#fad5e6] px-4 py-2 rounded-4xl cursor-pointer">
        <img className="max-w-6 mr-2" src={EnvelopeIcon} alt="Icono" />
        Notify Me
      </button>
    </div>
  )
}

export default App
