import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 text-xl ">
        <div className="flex gap-4 items-center lg:flex-shrink-0">
          <h1>ALEX HALL CODING</h1>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center lg:flex-shrink-0">
          <Button variant="ghost" size="default">
            ABOUT
          </Button>
          <Button variant="ghost" size="default">
            MY WORK
          </Button>
          <Button variant="ghost" size="default">
            CONTACT
          </Button>
        </div>
      </div>
    </>
  );
}
