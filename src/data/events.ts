export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  price: number;
  instructor: string;
  image: string;
  description: string;
  longDescription: string;
  capacity: number;
  availableTickets: number;
  tags: string[];
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Entre Diosas y Volcanes',
    date: '17 de Mayo, 2025',
    time: '16:00 a 22:00 Hrs',
    location: 'Cascada de las Ánimas',
    address: 'Camino al Volcán 3107, San Alfonso, Cajón del Maipo',
    price: 5990,
    instructor: 'Amar de Volcán, Euffe, Nina Inti, Anita Karen y las Diosas Pélvicas',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1200',
    description: 'Un evento inolvidable con música, baile, y mucho más en un entorno natural único.',
    longDescription: `Acerca del evento: Entre Diosas y Volcanes
Fecha: Sábado 17 de mayo de 2025
Hora: De 16:00 a 22:00 Hrs
Lugar: Cascada de las Ánimas, Camino al Volcán 3107, San Alfonso, Cajón del Maipo

Te invitamos a "Entre Diosas y Volcanes", un evento único que reunirá arte, música y danza en un entorno natural incomparable. Disfruta de una tarde llena de emociones, conexión y expresiones auténticas, donde cada presentación te llevará a un viaje personal de autodescubrimiento y empoderamiento.

Artistas invitados:
Amar de Volcán: Artista multidisciplinaria que fusiona danza y música con gran autenticidad, creando una experiencia única y transformadora.

Euffe: Un viaje sonoro a través del R&B, pop y ritmos urbanos. Euffe te invita a reflexionar y sanar con su música profunda y emocional.

Nina Inti: Cantante, actriz y bailarina de raíces quechua. Su música fusiona lo ancestral con lo moderno, transmitiendo un poderoso mensaje de liberación y resistencia cultural.

Anita Karen y las Diosas Pélvicas: Anita Karen, con su talento en medicina pélvica y danza, junto a las Diosas Pélvicas, un colectivo que celebra el empoderamiento femenino y la conexión profunda con el cuerpo.

Además:
Ceremonia Ritual Ave Fénix: Un espacio de renovación energética y purificación que elevará la experiencia del evento.

Lo que incluye:
Acceso completo a todos los shows y actividades artísticas.
Un ambiente seguro y acogedor, ideal para disfrutar de la música y las presentaciones.

Recomendaciones:
Trae ropa cómoda y calzado adecuado.
Protector solar, agua y un abrigo ligero son recomendados para tu comodidad.

¿Por qué asistir?
Este evento no es solo una ocasión para disfrutar de arte y música en vivo, es una oportunidad para reconectar con lo esencial, para liberarte de las cargas cotidianas y sumergirte en un espacio de auténtica expresión y empoderamiento. Es el momento perfecto para compartir con otros, descubrir tu fuerza interior y celebrar la vida en toda su diversidad.

"Entre Diosas y Volcanes" es una invitación a vivir el presente con intensidad, a escuchar tu voz interna y a ser parte de una experiencia colectiva que no solo transforma el cuerpo, sino también el alma. No te pierdas esta oportunidad de reconectar contigo mismo y con la energía del universo. ¡Nos vemos el 17 de mayo!`,
    capacity: 100,
    availableTickets: 80,
    tags: ['Música', 'Baile', 'Ceremonia', 'Danza']
  }
];

export const getEvent = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};