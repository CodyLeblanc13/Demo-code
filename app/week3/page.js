import Dog from "./dog";
export default function page() {
  const dog1 = {
    name: "Stella",
    age: 6,
    breed: "Bernedoodle",
    color: "Grey",
  };
  const dog2 = {
    name: "Max",
    age: 3,
    breed: "Golden Retriever",
    color: "Golden",
  };
  const dog3 = {
    name: "Beno",
    age: 2,
    breed: "Corgi",
    color: "Golden White",
  };
  return (
    <main>
      <h1 className="text-4xl, text-red-500">Week 3 - Components and props</h1>
      <h2 className="text-3xl text-purple-500">Dogs Information</h2>
      <Dog dog={dog1} />
      <Dog dog={dog2} />
      <Dog dog={dog3} />
      <Dog dog={{Name: "Chapi", Age: "Unknown", Breed: "Mexican Street Dog", Color: "Black and Brown"}} />
    </main>
  );
}
