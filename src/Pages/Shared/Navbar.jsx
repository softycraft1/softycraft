import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "What We Do",
      url: "/whatwedo",
    },
  ];
  return (
    <div className=" pt-4 px-6 m-auto sticky top-0 z-[100] bg-[#7fadbe6c]">
      <div className="flex justify-between h-12">
        <div className="">
          <h1 className="text-2xl font-bold">
            <Link to="/">SoftyCraft</Link>
          </h1>
        </div>
        <div className="">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="w-8 h-8 p-4 hover:border-2 hover:border-none hover:rounded-[25px] hover:bg-[#F8B90C] hover:drop-shadow-md"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
