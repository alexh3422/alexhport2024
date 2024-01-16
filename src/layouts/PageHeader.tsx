import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
          <h1>ALEX HALL CODING</h1>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center flex-shrink-0">
          <Button variant="ghost" size="default">
            About
          </Button>
          <Button variant="ghost" size="default">
            My Work
          </Button>
          <Button variant="ghost" size="default">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
