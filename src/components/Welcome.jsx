import Card from "./Card";

function Welcome() {
  return (
    <div className="rounded-3xl m-10 bg-slate-950 p-10 border border-slate-600">
      <h1 className="text-6xl text-center mb-10"> WELCOME!!</h1>
      <h3 className="mb-10 text-center">I don't have the less idea about what to put here, so:</h3>
      <div className="flex flex-wrap justify-center space-x-20 mb-10">
        <Card
          title="Things I learn with this proyect"
          text="I lear javascript, react and this thing to put classes, nothing special"
        />
        <Card title="Title of card" text="Content of the card" />
        <Card title="Title of card" text="Content of the card" />
      </div>
      <p className="text-center">
        We're no strangers to love You know the rules and so do I A full
        commitment's what I'm thinking of You wouldn't get this from any other
        guy I just wanna tell you how I'm feeling Gotta make you understand
        Never gonna give you up Never gonna let you down Never gonna turn around
        and desert you Never gonna make you cry Never gonna say goodbye Never
        gonna tell a lie and hurt you We've known each other for so long Your
        heart's been aching But you're too shy to say it Inside we both know
        what's been going on We know the game and we're gonna play it And if you
        ask me how I'm feeling Don't tell me you're too blind to see
      </p>
    </div>
  );
}

export default Welcome;
