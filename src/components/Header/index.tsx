export function Header() {
  return (
    <div className="relative">
      <img
        src="./assets/images/header.jpg"
        alt="Picture of the author"
        className="w-full h-14 relative"
      />

      <h1
        className="absolute top-[50%] 
                    translate-y-[-50%] 
                    translate-x-[-20%] 
                    font-greatVibes 
                    text-xl
                    text-gray-800
                    pl-[50%]
                     w-full"
      >
        Blog da Daya
      </h1>
    </div>
  );
}
