import Home from "../home";
import Title from "./title";
export default function page() {
  let a = 10;
  let b = 20;
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">Week 2 route/page</h1>
      <Home />
      <p>more content</p>
      <Title />
      <p>
        The sum of {a} + {b} is {a + b}
      </p>
    </main>
  );
}
