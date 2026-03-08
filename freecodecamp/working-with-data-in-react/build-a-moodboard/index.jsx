export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const moodboards = [
    {
      id: 1,
      color: "#2FA24F",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Carribean",
    },
    {
      id: 2,
      color: "#8A49A6",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach",
    },
    {
      id: 3,
      color: "#3E8FC3",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town",
    },
    {
      id: 4,
      color: "#BB3E7A",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suiz Canal",
    },
    {
      id: 5,
      color: "#E74C3C",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini",
    },
    {
      id: 6,
      color: "#95A5A6",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul",
    },
  ];

  return (
    <>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodboards.map((moodboard) => (
          <MoodBoardItem
            key={moodboard.id}
            color={moodboard.color}
            image={moodboard.image}
            description={moodboard.description}
          />
        ))}
      </div>
    </>
  );
}
