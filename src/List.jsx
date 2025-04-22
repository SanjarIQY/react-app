const items = [
  {
    task: "Learn React",
    emoji: "🗝️",
    isCompleted: true,
  },
  {
    task: "Dont stop english",
    emoji: "📲",
    isCompleted: true,
  },
  {
    task: "Eat apple",
    emoji: "⌚️",
    isCompleted: true,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.emoji}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};
