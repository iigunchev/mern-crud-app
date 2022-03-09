export default function Header({}) {
    return (
    <header className="
    mt-4 
    bg-slate-800 
    p-4 
    rounded-lg 
    flex 
    justify-between 
    items-center 
    md:mx-auto 
    md:container">
      <h3 className="text-slate-200 text-xl font-bold">6 Suggestions</h3>
      <div>
        <span className="text-slate-200 sm:block hidden">Sort by: Most Upvotes</span>

      </div>
      <button className="bg-fuchsia-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-fuchsia-600 active:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-fuchsia-300">+ Add Feedback</button>
    </header>);
  }