
export interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
}

export const artists: Artist[] = [
  {
    id: "amardevolcan",
    name: "Amardevolcan",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    bio: "Amardevolcan, una artista chilena que fusiona la danza ancestral con elementos contemporáneos. Su arte refleja la conexión profunda con la naturaleza y los elementos volcánicos de la cordillera de los Andes. A través de sus presentaciones, busca despertar la consciencia sobre la importancia de nuestra relación con la Madre Tierra."
  },
  {
    id: "euffe",
    name: "Euffe",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    bio: "Euffe es una talentosa artista multidisciplinar que combina música electrónica con instrumentos ancestrales. Su trayectoria incluye presentaciones en importantes festivales internacionales, donde ha cautivado al público con su única mezcla de sonidos modernos y tradicionales."
  },
  {
    id: "nina-inti",
    name: "Nina Inti",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    bio: "Nina Inti, reconocida por su poderosa voz y presencia escénica, trae consigo la sabiduría de las tradiciones andinas. Con más de una década de experiencia en la música ceremonial, sus presentaciones son una invitación a conectar con nuestra esencia espiritual a través del canto y la danza."
  }
];
