import MarkG from '../assets/MarkG.png';

function Header() {
    return (
      <header className="p-6 text-center border-b border-gray-700">
      <img
        src={MarkG}
        alt="Mark Gay"
        className="w-48 aspect-square object-cover object-top mx-auto rounded-full border-4 border-gray-700 mb-4 shadow-lg"
      />
        <h1 className="text-4xl font-bold">Mark Gay</h1>
        <p className="text-gray-400">Analyst Developer</p>
        <p className="text-gray-400">for</p>
        <p className="text-gray-400">Higher Education Integrations</p>
      </header>
    );
  }
  
  export default Header;