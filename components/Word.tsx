export default function Word() {
  const text = "Transforming Ideas into Seamless User Interactions";
  const words = text.split(" ");

  return (
    <div className=" text-center py-8">
      {words.map((word, i) => (
        <span
          style={{
            animationDelay: `${i * 0.5}s`,
            color: i === 3 ? "purple" : "inherit",
          }}
          className="word text-center text-[40px] md:text-5xl lg:text-6xl"
          key={i}
        >
          {word + " "}
        </span>
      ))}
    </div>
  );
}
